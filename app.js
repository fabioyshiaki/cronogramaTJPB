// =========================================================================
// app.js — Versão 4.0 (Expansão Interna na Aba 1 com Estratégia + Gran)
// =========================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import { GRAN_COURSE_URLS, GRAN_CODES, ESTRATEGIA_MAP, WEEKS_DATA } from "./dados-cronograma.js";
import { SYLLABUS_DATA } from "./dados-edital.js";

const STORAGE_KEY = "tjpb_2026_v4_progress";
let appState = {};
let db = null;
let auth = null;
let currentUser = null;
let isRemoteUpdating = false;
let granAppMode = "UNIVERSAL";
let currentCategoryFilter = "ALL";
const appId = typeof __app_id !== "undefined" ? __app_id : "tjpb-2026-dev-app";

function showToast(message, isCloud = false) {
  const toast = document.getElementById("toastNotice");
  const icon = document.getElementById("toastIcon");
  const text = document.getElementById("toastText");
  if (!toast) return;
  icon.textContent = isCloud ? "☁️" : "✓";
  text.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2600);
}

function copyTextSilent(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
      return;
    }
  } catch (e) {}
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function linkifyGranCodesInText(text) {
  if (!text) return "";
  return text
    .replace(/\n/g, "<br>")
    .replace(
      /\b(EST_TJPB|EST_TI|EST_MPU|EST_SQ|212091|212132|212088|212093|212092|212094|207803|207802|207807|207800|198499|210869|211798|211797|211795|210973|212301|212300|212295|198053|210948|194432|202271|180207)\b/g,
      (match) => {
        const isEst = match.startsWith("EST_");
        const badgeStyle = isEst
          ? "bg-amber-100 hover:bg-amber-200 text-amber-950 border-amber-300"
          : "bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border-emerald-300";
        const icon = isEst ? "🦉" : "📲";
        return `<button onclick="openGranCourse('${match}')" class="inline-flex items-center gap-0.5 ${badgeStyle} border font-extrabold px-1.5 py-0.5 rounded-md text-[11px] transition cursor-pointer" title="Abrir ${match}">${icon} ${match}</button>`;
      }
    );
}

function extractPrimaryGranCode(text) {
  if (!text) return null;
  const match = text.match(
    /\b(212091|212132|212088|212093|212092|212094|207803|207802|207807|207800|198499|210869|211798|211797|211795|210973|212301|212300|212295|198053|210948|194432|202271|180207)\b/
  );
  if (match) return match[1];
  if (text.includes("Estratégia TJ-PB")) return "EST_TJPB";
  if (text.includes("Sistema de Questões") || text.includes("Caderno de Reta Final")) return "EST_SQ";
  if (text.includes("Similar FGV 2026 no Estratégia")) return "EST_TI";
  return null;
}

window.openGranCourse = function (codeKey) {
  const targetUrl = GRAN_COURSE_URLS[codeKey] || "https://aluno.grancursosonline.com.br/";
  const isNumericCode = /^\d+$/.test(codeKey);
  if (isNumericCode) {
    copyTextSilent(codeKey);
    showToast(`Código ${codeKey} copiado! Abrindo curso...`);
  } else {
    showToast("Abrindo curso na plataforma...");
  }

  const isAndroid = /Android/i.test(navigator.userAgent);
  if (isAndroid && granAppMode === "INTENT" && !codeKey.startsWith("EST_")) {
    const cleanUrl = targetUrl.replace(/^https?:\/\//, "");
    window.location.href = `intent://${cleanUrl}#Intent;scheme=https;package=br.com.grancursosonline;S.browser_fallback_url=${encodeURIComponent(targetUrl)};end`;
  } else {
    window.open(targetUrl, "_blank", "noopener");
  }
};

window.openGranPortal = function (event) {
  if (event) event.preventDefault();
  window.open("https://aluno.grancursosonline.com.br/", "_blank", "noopener");
};

window.openEstrategiaPortal = function (event) {
  if (event) event.preventDefault();
  window.open("https://perfil.estrategia.com/login", "_blank", "noopener");
};

window.openGranQuestoesApp = function (event) {
  if (event) event.preventDefault();
  window.open("https://questoes.grancursosonline.com.br/provas?bancas=102", "_blank", "noopener");
};

window.toggleGranLinkMode = function () {
  granAppMode = granAppMode === "UNIVERSAL" ? "INTENT" : "UNIVERSAL";
  const btn = document.getElementById("granModeBtn");
  if (btn) {
    btn.textContent =
      granAppMode === "UNIVERSAL"
        ? "📲 Modo App: Universal Link (Auto)"
        : "📲 Modo App: Intent Direto (Android)";
  }
  showToast(
    granAppMode === "UNIVERSAL"
      ? "Modo Universal Link ativo (iOS/Android/Web)"
      : "Modo Intent Android ativo"
  );
};

// Expande as 6 fontes (2 Estratégia Concursos + 4 Gran Cursos) diretamente na Aba 1 sem mudar de tela
window.toggleInPlaceSources = function (sourceBoxId) {
  const el = document.getElementById(sourceBoxId);
  if (!el) return;
  el.classList.toggle("hidden");
  if (!el.classList.contains("hidden") && el.innerHTML.trim() === "") {
    const topicId = el.getAttribute("data-topic-id");
    const matchTopic = SYLLABUS_DATA.find((s) => s.id === topicId);
    const estData = ESTRATEGIA_MAP[topicId] || {
      e1: "Estratégia TJ-PB 2026 (Pós-Edital): Pacote Completo Analista Judiciário - Desenvolvimento de Sistemas (LDI + PDF + Videoaulas).",
      e2: "Similar FGV 2026 no Estratégia: Pacotes DATAPREV 2026, TJ-RJ 2026 e MPU (FGV) + Passo Estratégico."
    };

    if (matchTopic) {
      el.innerHTML = `
        <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <div class="text-[11px] font-extrabold text-indigo-950 border-b border-slate-200 pb-1">
            📖 Tópico no Edital Verticalizado: <span class="text-teal-800">${matchTopic.topic}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            ${renderInlineSourceCard("🦉 Estratégia 1 (TJ-PB 2026 Pós-Edital / LDI)", "text-amber-950", "bg-amber-50/90 border border-amber-300", estData.e1, "EST_TJPB")}
            ${renderInlineSourceCard("🦉 Estratégia 2 (Similar FGV 2026 / Passo Estratégico)", "text-amber-900", "bg-amber-50/50 border border-amber-200", estData.e2, "EST_TI")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-xs pt-1">
            ${renderInlineSourceCard("🎯 Gran 1 (Prioritária FGV/TJPB)", "text-indigo-800", "bg-indigo-50/70 border border-indigo-200", matchTopic.f1)}
            ${renderInlineSourceCard("🎯 Gran 2 (Alternativa FGV/Tribunais)", "text-teal-800", "bg-teal-50/70 border border-teal-200", matchTopic.f2)}
            ${renderInlineSourceCard("🎯 Gran 3 (Complementar / Isolado)", "text-slate-700", "bg-white border border-slate-200", matchTopic.f3)}
            ${renderInlineSourceCard("🎯 Gran 4 (Quarta Fonte / PDF)", "text-slate-700", "bg-white border border-slate-200", matchTopic.f4)}
          </div>
        </div>
      `;
    }
  }
};

function renderInlineSourceCard(titleBadge, badgeColorClass, bgClass, textContent, forcedCode = null) {
  const linkedText = linkifyGranCodesInText(textContent);
  const primaryCode = forcedCode || extractPrimaryGranCode(textContent);
  const isEst = primaryCode && primaryCode.startsWith("EST_");
  const actionBtn = primaryCode
    ? `<button onclick="openGranCourse('${primaryCode}')" class="no-print mt-2 w-full ${
        isEst ? "bg-amber-600 hover:bg-amber-500" : "bg-emerald-600 hover:bg-emerald-500"
      } text-white font-extrabold text-[11px] px-2.5 py-1.5 rounded-lg shadow-2xs transition flex items-center justify-center gap-1 cursor-pointer">
         <span>${isEst ? "🦉" : "🚀"}</span> Abrir no ${isEst ? "Estratégia Concursos" : `App Gran ${/^\d+$/.test(primaryCode) ? `(Cód. ${primaryCode})` : ""}`}
       </button>`
    : "";

  return `
    <div class="p-2.5 rounded-xl ${bgClass} flex flex-col justify-between">
      <div>
        <span class="text-[10px] font-black uppercase ${badgeColorClass} block mb-1">${titleBadge}</span>
        <p class="text-slate-800 leading-relaxed">${linkedText}</p>
      </div>
      ${actionBtn}
    </div>
  `;
}

// =========================================================================
// PERSISTÊNCIA LOCALSTORAGE + FIREBASE
// =========================================================================
function loadFromLocalStorage() {
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ||
      localStorage.getItem("tjpb_2026_v3_progress") ||
      localStorage.getItem("tjpb_2026_v2_progress");
    if (raw) {
      appState = JSON.parse(raw);
    }
  } catch (e) {
    console.error("Erro ao ler localStorage:", e);
  }
}

function saveToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error("Erro ao gravar no localStorage:", e);
  }
}

async function saveToCloud() {
  if (!db || !currentUser || isRemoteUpdating) return;
  try {
    const docRef = doc(db, "artifacts", appId, "users", currentUser.uid, "study_progress", "tjpb_v4");
    await setDoc(docRef, { state: JSON.stringify(appState), updatedAt: Date.now() }, { merge: true });
    const badgeText = document.getElementById("syncStatusText");
    if (badgeText) badgeText.textContent = "Sincronizado na Nuvem";
  } catch (e) {
    console.error("Erro ao sincronizar no Firestore:", e);
  }
}

function bindAllInputs() {
  document.querySelectorAll("[data-save-id]").forEach((el) => {
    const key = el.getAttribute("data-save-id");
    if (appState[key] !== undefined) {
      if (el.type === "checkbox") {
        el.checked = Boolean(appState[key]);
      } else {
        el.value = appState[key];
      }
    }
    el.oninput = () => {
      appState[key] = el.type === "checkbox" ? el.checked : el.value;
      saveToLocalStorage();
      updateMetrics();
      saveToCloud();
      showToast("Progresso salvo automaticamente!");
    };
  });
  updateMetrics();
}

function updateMetrics() {
  const allChecks = document.querySelectorAll('input[type="checkbox"][data-save-id]');
  let checkedCount = 0;
  allChecks.forEach((c) => {
    if (c.checked) checkedCount++;
  });
  const pct = allChecks.length > 0 ? Math.round((checkedCount / allChecks.length) * 100) : 0;
  const bar = document.getElementById("globalProgressBar");
  const txt = document.getElementById("globalProgressText");
  if (bar) bar.style.width = pct + "%";
  if (txt) txt.textContent = `${pct}% concluído (${checkedCount}/${allChecks.length})`;

  let totalCorrect = 0;
  let totalQuestions = 0;
  document.querySelectorAll(".fgv-hit-input").forEach((hitEl) => {
    const totId = hitEl.getAttribute("data-tot-target");
    const totEl = document.querySelector(`[data-save-id="${totId}"]`);
    const h = parseInt(hitEl.value, 10);
    const t = totEl ? parseInt(totEl.value, 10) : 0;
    if (!isNaN(h) && !isNaN(t) && t > 0) {
      totalCorrect += h;
      totalQuestions += t;
    }
  });
  const fgvPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const fgvSummary = document.getElementById("fgvScoreSummary");
  if (fgvSummary) fgvSummary.textContent = `${totalCorrect}/${totalQuestions} (${fgvPct}%)`;

  let discDone = 0;
  document.querySelectorAll(".disc-check").forEach((d) => {
    if (d.checked) discDone++;
  });
  const discEl = document.getElementById("discursivaSummary");
  if (discEl) discEl.textContent = `${discDone}/6`;
}

// =========================================================================
// RENDERIZAÇÃO DA ABA 1 (SEMANAS 1 A 10) E ABA 2 (EDITAL + ESTRATÉGIA + GRAN)
// =========================================================================
function renderWeeks() {
  const container = document.getElementById("weeksContainer");
  if (!container) return;
  let html = "";

  WEEKS_DATA.forEach((week) => {
    if (week.phase) {
      html += `
        <div class="border-b-2 border-indigo-900 pb-1.5 pt-3">
          <h2 class="text-base sm:text-xl font-black text-indigo-950 uppercase tracking-wide">${week.phase}</h2>
        </div>
      `;
    }

    const headerCodesLinked = linkifyGranCodesInText(week.codes);

    html += `
      <section class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-print">
        <div class="bg-indigo-900 text-white p-3.5 sm:p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
          <div>
            <h3 class="font-extrabold text-sm sm:text-base">${week.title}</h3>
            <p class="text-[11px] text-indigo-200 mt-0.5"><strong>Pré-Requisito / Ordem Lógica:</strong> ${week.dependency}</p>
          </div>
          <div class="text-[11px] bg-indigo-950/90 border border-indigo-700 px-2.5 py-1.5 rounded-xl font-semibold flex flex-wrap items-center gap-1 self-start sm:self-center shrink-0">
            <span class="text-indigo-200 mr-1">Atalhos:</span> ${headerCodesLinked}
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-slate-100 text-slate-700 border-b border-slate-200">
                <th class="p-2.5 w-24 text-center">Dia</th>
                <th class="p-2.5 w-1/3">Bloco 1: Básica (Nome no Edital + Fontes)</th>
                <th class="p-2.5">Bloco 2: Específica de TI (Nome no Edital + Fontes)</th>
                <th class="p-2.5 w-28 text-center">Acertos FGV</th>
                <th class="p-2.5 w-36 text-center">Check Diário</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
    `;

    week.days.forEach((d) => {
      const rowId = `row_${d.id}`;
      if (d.isRest) {
        html += `
          <tr id="${rowId}" class="bg-slate-50 text-slate-600 transition-colors">
            <td class="p-2.5 text-center font-bold">${d.day}</td>
            <td class="p-2.5 font-semibold">${d.b1}</td>
            <td class="p-2.5">${d.b2}</td>
            <td class="p-2.5 text-center">—</td>
            <td class="p-2.5 text-center">
              <label class="inline-flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold">
                <input type="checkbox" data-save-id="${d.id}_rest" class="w-4 h-4 accent-teal-600 rounded"> Descanso
              </label>
            </td>
          </tr>
        `;
      } else {
        const b1Html = linkifyGranCodesInText(d.b1);
        const b2Html = linkifyGranCodesInText(d.b2);
        const boxId1 = `sources_box_${d.id}_b1`;
        const boxId2 = `sources_box_${d.id}_b2`;

        const b1Btn = d.b1Target
          ? `<div class="mt-2 no-print">
               <button onclick="toggleInPlaceSources('${boxId1}')" class="inline-flex items-center gap-1 text-[11px] font-extrabold text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-300 px-2.5 py-1 rounded-lg transition cursor-pointer">
                 📚 Ver Fontes Estratégia + Gran (Nesta Tela) ▼
               </button>
               <div id="${boxId1}" data-topic-id="${d.b1Target}" class="hidden mt-2 pt-2 border-t border-indigo-100"></div>
             </div>`
          : "";

        const b2Btn = d.b2Target
          ? `<div class="mt-2 no-print">
               <button onclick="toggleInPlaceSources('${boxId2}')" class="inline-flex items-center gap-1 text-[11px] font-extrabold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-300 px-2.5 py-1 rounded-lg transition cursor-pointer">
                 📚 Ver Fontes Estratégia + Gran (Nesta Tela) ▼
               </button>
               <div id="${boxId2}" data-topic-id="${d.b2Target}" class="hidden mt-2 pt-2 border-t border-teal-100"></div>
             </div>`
          : "";

        html += `
          <tr id="${rowId}" class="hover:bg-slate-50/80 transition-colors">
            <td class="p-2.5 text-center font-extrabold text-indigo-950 whitespace-nowrap">${d.day}</td>
            <td class="p-2.5 align-top leading-relaxed">${b1Html}${b1Btn}</td>
            <td class="p-2.5 align-top font-medium text-slate-800 leading-relaxed">${b2Html}${b2Btn}</td>
            <td class="p-2.5 text-center align-middle">
              <div class="inline-flex items-center gap-1 bg-slate-50 border border-slate-300 rounded-lg px-1.5 py-1">
                <input type="text" data-save-id="${d.id}_hit" data-tot-target="${d.id}_tot" placeholder="0" class="fgv-hit-input w-7 text-center bg-transparent font-bold text-indigo-900 focus:outline-none">
                <span class="text-slate-400">/</span>
                <input type="text" data-save-id="${d.id}_tot" value="15" class="w-7 text-center bg-transparent text-slate-600 focus:outline-none">
              </div>
            </td>
            <td class="p-2.5 align-middle">
              <div class="flex flex-col gap-1 text-[11px]">
                <label class="inline-flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" data-save-id="${d.id}_teo" class="w-3.5 h-3.5 accent-indigo-600 rounded"> <span>LDI/PDF/Vídeo</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" data-save-id="${d.id}_qst" class="w-3.5 h-3.5 accent-teal-600 rounded"> <span>Questões FGV</span>
                </label>
              </div>
            </td>
          </tr>
        `;
      }
    });

    html += `
            </tbody>
          </table>
        </div>
        <div class="p-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
          <span class="font-bold text-slate-600 whitespace-nowrap">📝 Caderno de Erros / Passo Estratégico (${week.id.toUpperCase()}):</span>
          <input type="text" data-save-id="${week.id}_notes" placeholder="Anote os subtópicos para revisar no Passo Estratégico ou aulas pendentes..." class="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-indigo-600">
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
}

function renderSyllabus() {
  const container = document.getElementById("syllabusContainer");
  if (!container) return;
  const query = (document.getElementById("syllabusSearchInput")?.value || "").toLowerCase().trim();

  const filtered = SYLLABUS_DATA.filter((item) => {
    const matchCat = currentCategoryFilter === "ALL" || item.cat === currentCategoryFilter;
    if (!matchCat) return false;
    if (!query) return true;
    const est = ESTRATEGIA_MAP[item.id] || { e1: "", e2: "" };
    const fullText = `${item.id} ${item.catTitle} ${item.topic} ${est.e1} ${est.e2} ${item.f1} ${item.f2} ${item.f3} ${item.f4}`.toLowerCase();
    return fullText.includes(query);
  });

  const groups = {};
  filtered.forEach((item) => {
    if (!groups[item.catTitle]) groups[item.catTitle] = [];
    groups[item.catTitle].push(item);
  });

  let html = "";
  Object.keys(groups).forEach((groupTitle) => {
    html += `
      <section class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-print">
        <div class="bg-slate-900 text-white p-3.5 sm:p-4">
          <h3 class="font-extrabold text-sm sm:text-base uppercase tracking-wide text-teal-300">${groupTitle}</h3>
        </div>
        <div class="divide-y divide-slate-200">
    `;

    groups[groupTitle].forEach((item) => {
      const estData = ESTRATEGIA_MAP[item.id] || {
        e1: "Estratégia TJ-PB 2026 (Pós-Edital): Pacote Completo Analista Judiciário - Desenvolvimento de Sistemas.",
        e2: "Similar FGV 2026 no Estratégia: Pacotes DATAPREV 2026, TJ-RJ 2026 e MPU (FGV)."
      };

      html += `
        <div id="topic-card-${item.id}" class="p-4 transition-all ${item.isGap ? "bg-rose-50/40" : "hover:bg-slate-50/70"}">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
            <div class="flex items-start gap-2.5">
              <input type="checkbox" data-save-id="syl_done_${item.id}" class="mt-1 w-4 h-4 accent-indigo-600 rounded shrink-0">
              <div>
                <h4 class="font-extrabold text-xs sm:text-sm text-slate-900">${item.topic}</h4>
              </div>
            </div>
            ${item.isGap ? '<span class="bg-amber-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase self-start shrink-0">Coberto no Estratégia TJ-PB + Pacotes Alternativos Gran</span>' : ""}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs mb-2.5">
            ${renderInlineSourceCard("🦉 Estratégia 1 (Prioritária: TJ-PB 2026 Pós-Edital / LDI)", "text-amber-950", "bg-amber-50/90 border border-amber-300", estData.e1, "EST_TJPB")}
            ${renderInlineSourceCard("🦉 Estratégia 2 (Similar FGV 2026 / Passo Estratégico)", "text-amber-900", "bg-amber-50/50 border border-amber-200", estData.e2, "EST_TI")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            ${renderInlineSourceCard("🎯 Gran 1 (Prioritária FGV/TJPB)", "text-indigo-800", "bg-indigo-50/70 border border-indigo-200", item.f1)}
            ${renderInlineSourceCard("🎯 Gran 2 (Alternativa FGV/Tribunais)", "text-teal-800", "bg-teal-50/70 border border-teal-200", item.f2)}
            ${renderInlineSourceCard("🎯 Gran 3 (Complementar / Isolado)", "text-slate-700", "bg-slate-50 border border-slate-200", item.f3)}
            ${renderInlineSourceCard("🎯 Gran 4 (Quarta Fonte / PDF)", "text-slate-700", "bg-slate-50 border border-slate-200", item.f4)}
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </section>
    `;
  });

  if (!html) {
    html = `<div class="bg-white rounded-2xl p-8 text-center text-slate-500 text-sm border border-slate-200">Nenhum tópico encontrado para a busca atual.</div>`;
  }

  container.innerHTML = html;
  bindAllInputs();
}

function renderGranCodes() {
  const grid = document.getElementById("granCodesGrid");
  if (!grid) return;
  grid.innerHTML = GRAN_CODES.map((c) => {
    const isEst = c.code.startsWith("EST_");
    return `
      <div class="p-3.5 rounded-xl ${isEst ? "bg-amber-50/70 border-amber-300" : "bg-slate-50 border-slate-200"} border flex flex-col justify-between gap-2">
        <div>
          <div class="flex items-center justify-between gap-2">
            <span class="${isEst ? "bg-amber-900 text-amber-200" : "bg-indigo-900 text-teal-300"} font-black px-2.5 py-0.5 rounded-lg text-xs">${c.code}</span>
            <span class="text-[11px] font-bold text-slate-500">${c.focus}</span>
          </div>
          <p class="font-extrabold text-slate-900 mt-1.5">${c.name}</p>
          <p class="text-slate-600 text-[11px] mt-1">${c.role}</p>
        </div>
        <div class="no-print mt-2 flex flex-wrap gap-2">
          <button onclick="openGranCourse('${c.code}')" class="${isEst ? "bg-amber-600 hover:bg-amber-500" : "bg-emerald-600 hover:bg-emerald-500"} text-white font-extrabold text-[11px] px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1">
            <span>${isEst ? "🦉" : "🚀"}</span> Abrir ${isEst ? "no Estratégia" : `no App Gran (${c.code})`}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function updateTabButtonsUI(tabId) {
  document.querySelectorAll(".tab-btn").forEach((b) => {
    b.className = "tab-btn bg-indigo-900/70 hover:bg-indigo-800 text-indigo-200 font-semibold px-3.5 py-2 rounded-t-lg text-xs sm:text-sm whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer";
  });
  const activeTop = document.getElementById("btn-" + tabId);
  if (activeTop) {
    activeTop.className = "tab-btn bg-white text-indigo-950 font-extrabold px-3.5 py-2 rounded-t-lg text-xs sm:text-sm whitespace-nowrap transition flex items-center gap-1.5 shadow-xs cursor-pointer";
  }

  ["tab-cronograma", "tab-fontes", "tab-discursivas"].forEach((id) => {
    const mobBtn = document.getElementById("mob-" + id);
    if (!mobBtn) return;
    if (id === tabId) {
      mobBtn.className = "py-2.5 px-2 flex flex-col items-center justify-center text-[11px] font-bold text-teal-300 border-t-2 border-teal-400";
    } else {
      mobBtn.className = "py-2.5 px-2 flex flex-col items-center justify-center text-[11px] font-medium text-indigo-300";
    }
  });
}

window.switchTab = function (tabId, scrollToTop = true) {
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.add("hidden"));
  const target = document.getElementById(tabId);
  if (target) target.classList.remove("hidden");
  updateTabButtonsUI(tabId);
  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

window.filterSyllabus = function () {
  renderSyllabus();
};

window.resetSyllabusFilters = function () {
  const searchInput = document.getElementById("syllabusSearchInput");
  if (searchInput) searchInput.value = "";
  window.setSyllabusCategory("ALL");
};

window.setSyllabusCategory = function (cat) {
  currentCategoryFilter = cat;
  document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
    if (btn.getAttribute("data-cat") === cat) {
      btn.className = "cat-filter-btn bg-indigo-900 text-white text-xs font-bold px-3 py-2 rounded-xl cursor-pointer";
    } else {
      btn.className = "cat-filter-btn bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded-xl cursor-pointer";
    }
  });
  renderSyllabus();
};

window.copyGranCode = function (code) {
  copyTextSilent(code);
  showToast(`Código ${code} copiado!`);
};

window.exportBackupJSON = function () {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", "backup_cronograma_tjpb_2026_v4.json");
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
  showToast("Backup JSON baixado no aparelho!");
};

window.importBackupJSON = function (event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && typeof parsed === "object") {
        appState = parsed;
        saveToLocalStorage();
        bindAllInputs();
        saveToCloud();
        showToast("Backup restaurado com sucesso!");
      }
    } catch (err) {
      showToast("Arquivo JSON inválido.");
    }
  };
  reader.readAsText(file);
};

async function initFirebaseSync() {
  try {
    if (typeof __firebase_config === "undefined" || !__firebase_config) return;
    const firebaseConfig = JSON.parse(__firebase_config);
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    if (typeof __initial_auth_token !== "undefined" && __initial_auth_token) {
      await signInWithCustomToken(auth, __initial_auth_token);
    } else {
      await signInAnonymously(auth);
    }

    onAuthStateChanged(auth, (user) => {
      currentUser = user;
      if (!user) return;
      const docRef = doc(db, "artifacts", appId, "users", user.uid, "study_progress", "tjpb_v4");
      onSnapshot(
        docRef,
        (snap) => {
          if (snap.exists()) {
            const data = snap.data();
            if (data && data.state) {
              isRemoteUpdating = true;
              appState = { ...appState, ...JSON.parse(data.state) };
              saveToLocalStorage();
              bindAllInputs();
              isRemoteUpdating = false;
              const badgeText = document.getElementById("syncStatusText");
              if (badgeText) badgeText.textContent = "Sincronizado na Nuvem";
            }
          } else {
            saveToCloud();
          }
        },
        (err) => {
          console.warn("Modo offline/local ativo:", err.message);
        }
      );
    });
  } catch (e) {
    console.warn("Persistência local ativa:", e.message);
  }
}

function initCharts() {
  if (typeof Chart === "undefined") return;
  const ctxPoints = document.getElementById("pointsChart")?.getContext("2d");
  if (ctxPoints) {
    new Chart(ctxPoints, {
      type: "doughnut",
      data: {
        labels: [
          "Conhecimentos Específicos TI (40 pts)",
          "Prova Discursiva — 30 Linhas (40 pts)",
          "Língua Portuguesa FGV (10 pts)",
          "Raciocínio Lógico-Matemático (10 pts)"
        ],
        datasets: [
          {
            data: [40, 40, 10, 10],
            backgroundColor: ["#3b82f6", "#8b5cf6", "#14b8a6", "#f59e0b"],
            borderWidth: 2,
            borderColor: "#ffffff"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { boxWidth: 12, font: { size: 10 } }
          }
        }
      }
    });
  }

  const ctxChains = document.getElementById("chainsChart")?.getContext("2d");
  if (ctxChains) {
    new Chart(ctxChains, {
      type: "bar",
      data: {
        labels: [
          "Português FGV",
          "RLM FGV",
          "Algoritmos, Web & Mobile",
          "Eng. Software & System Design",
          "BD, Tuning, NoSQL & IA",
          "DevOps, Seg. & Normas CNJ"
        ],
        datasets: [
          {
            label: "Semanas de Estudo (Plano 10 Semanas)",
            data: [10, 10, 3, 2, 2, 3],
            backgroundColor: "#4f46e5",
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, ticks: { precision: 0 } },
          x: { ticks: { font: { size: 9 } } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  renderWeeks();
  renderSyllabus();
  renderGranCodes();
  bindAllInputs();
  initCharts();
  initFirebaseSync();
});
