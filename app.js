// =========================================================================
// PARTE 4 DE 4: app.js
// Motor de Interligação Aba 1 <-> Aba 2, Deep Links App Gran e Persistência
// =========================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import { GRAN_COURSE_URLS, GRAN_CODES, WEEKS_DATA } from "./dados-cronograma.js";
import { SYLLABUS_DATA } from "./dados-edital.js";

const STORAGE_KEY = "tjpb_2026_v3_progress";
let appState = {};
let db = null;
let auth = null;
let currentUser = null;
let isRemoteUpdating = false;
let lastOriginDayRowId = null;
let granAppMode = "UNIVERSAL"; // "UNIVERSAL" ou "INTENT"
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

// Transforma códigos numéricos (ex: 212091) em botões clicáveis que abrem a App do Gran Cursos
function linkifyGranCodesInText(text) {
  if (!text) return "";
  return text.replace(
    /\b(212091|212132|212088|212093|212092|212094|207803|207802|207807|207800|198499|210869|211798|211797|211795|210973|212301|212300|212295|198053|210948|194432|202271|180207)\b/g,
    (match) => {
      return `<button onclick="openGranCourse('${match}')" class="inline-flex items-center gap-0.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 font-extrabold px-1.5 py-0.5 rounded-md text-[11px] transition cursor-pointer" title="Copiar código ${match} e abrir no App Gran Cursos">📲 ${match}</button>`;
    }
  );
}

// Extrai o primeiro código Gran conhecido de uma string de fonte para criar o botão de ação direta na Aba 2
function extractPrimaryGranCode(text) {
  if (!text) return null;
  const match = text.match(
    /\b(212091|212132|212088|212093|212092|212094|207803|207802|207807|207800|198499|210869|211798|211797|211795|210973|212301|212300|212295|198053|210948|194432|202271|180207)\b/
  );
  if (match) return match[1];
  if (text.includes("TJPB Banco de Dados") || text.includes("TJPB BD")) return "TJPB_BD";
  if (text.includes("TJPB Infraestrutura") || text.includes("TJPB Infra")) return "TJPB_INFRA";
  if (text.includes("Intensiva para FGV") || text.includes("Intensivo FGV")) return "PORT_FGV_MW";
  if (text.includes("FGV em Exercícios")) return "PORT_FGV_LC";
  if (text.includes("Edward Melo")) return "REDES_EM";
  if (text.includes("Cargo A32")) return "MPU_A32";
  if (text.includes("DPDF - Cargo 3")) return "DPDF_BD";
  if (text.includes("PROCERGS")) return "PROCERGS";
  if (text.includes("SEPLAN AP")) return "SEPLAN_AP";
  if (text.includes("MP ES")) return "MP_ES";
  if (text.includes("BRDE")) return "BRDE";
  if (text.includes("Francion Santos")) return "PJE_FS";
  return null;
}

// Abre o curso na App Gran Cursos (Universal Link ou Intent Android) + copia o código automaticamente
window.openGranCourse = function (codeKey) {
  const targetUrl = GRAN_COURSE_URLS[codeKey] || "https://aluno.grancursosonline.com.br/";
  const isNumericCode = /^\d+$/.test(codeKey);
  if (isNumericCode) {
    copyTextSilent(codeKey);
    showToast(`Código ${codeKey} copiado! Abrindo no Gran Cursos...`);
  } else {
    showToast("Abrindo curso no Gran Cursos...");
  }

  const isAndroid = /Android/i.test(navigator.userAgent);
  if (isAndroid && granAppMode === "INTENT") {
    const cleanUrl = targetUrl.replace(/^https?:\/\//, "");
    const intentUrl = `intent://${cleanUrl}#Intent;scheme=https;package=br.com.grancursosonline;S.browser_fallback_url=${encodeURIComponent(targetUrl)};end`;
    window.location.href = intentUrl;
  } else {
    window.open(targetUrl, "_blank", "noopener");
  }
};

window.openGranPortal = function (event) {
  if (event) event.preventDefault();
  const targetUrl = "https://aluno.grancursosonline.com.br/";
  const isAndroid = /Android/i.test(navigator.userAgent);
  if (isAndroid && granAppMode === "INTENT") {
    window.location.href = `intent://aluno.grancursosonline.com.br/#Intent;scheme=https;package=br.com.grancursosonline;S.browser_fallback_url=${encodeURIComponent(targetUrl)};end`;
  } else {
    window.open(targetUrl, "_blank", "noopener");
  }
};

window.openGranQuestoesApp = function (event) {
  if (event) event.preventDefault();
  const targetUrl = "https://questoes.grancursosonline.com.br/provas?bancas=102";
  const isAndroid = /Android/i.test(navigator.userAgent);
  if (isAndroid && granAppMode === "INTENT") {
    window.location.href = `intent://questoes.grancursosonline.com.br/provas?bancas=102#Intent;scheme=https;package=br.com.grancursosonline.questoes;S.browser_fallback_url=${encodeURIComponent(targetUrl)};end`;
  } else {
    window.open(targetUrl, "_blank", "noopener");
  }
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
      : "Modo Intent Android ativo (força abertura do App Gran)"
  );
};

// Navegação Direta: Salta de um bloco da Aba 1 para o card correspondente na Aba 2
window.jumpToTab2Topic = function (topicId, originDayRowId = null, originDayLabel = "") {
  if (originDayRowId) {
    lastOriginDayRowId = originDayRowId;
    const returnBar = document.getElementById("returnToScheduleBar");
    const returnTxt = document.getElementById("returnToScheduleText");
    if (returnBar && returnTxt) {
      returnTxt.textContent = `Voltar para ${originDayLabel || "o Cronograma"} (Aba 1)`;
      returnBar.classList.remove("hidden");
    }
  }

  currentCategoryFilter = "ALL";
  const searchInput = document.getElementById("syllabusSearchInput");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
    if (btn.getAttribute("data-cat") === "ALL") {
      btn.className = "cat-filter-btn bg-indigo-900 text-white text-xs font-bold px-3 py-2 rounded-xl cursor-pointer";
    } else {
      btn.className = "cat-filter-btn bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded-xl cursor-pointer";
    }
  });
  renderSyllabus();

  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.add("hidden"));
  const targetPanel = document.getElementById("tab-fontes");
  if (targetPanel) targetPanel.classList.remove("hidden");
  updateTabButtonsUI("tab-fontes");

  setTimeout(() => {
    document.querySelectorAll(".target-highlight").forEach((el) => el.classList.remove("target-highlight"));
    const card = document.getElementById("topic-card-" + topicId);
    if (card) {
      card.classList.add("target-highlight");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      showToast("Tópico localizado nas 4 Fontes (Aba 2)!");
    }
  }, 80);
};

// Retorna da Aba 2 para a linha exata do dia na Aba 1
window.returnToOriginDay = function () {
  window.switchTab("tab-cronograma", false);
  const returnBar = document.getElementById("returnToScheduleBar");
  if (returnBar) returnBar.classList.add("hidden");

  if (lastOriginDayRowId) {
    setTimeout(() => {
      document.querySelectorAll(".target-highlight").forEach((el) => el.classList.remove("target-highlight"));
      const row = document.getElementById(lastOriginDayRowId);
      if (row) {
        row.classList.add("target-highlight");
        row.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 80);
  }
};

function getScheduledDaysForTopic(topicId) {
  const matches = [];
  WEEKS_DATA.forEach((w) => {
    w.days.forEach((d) => {
      if (d.b1Target === topicId || d.b2Target === topicId) {
        matches.push({ rowId: `row_${d.id}`, label: d.day });
      }
    });
  });
  return matches;
}

window.jumpBackToDayRow = function (rowId, dayLabel) {
  lastOriginDayRowId = rowId;
  window.returnToOriginDay();
  showToast(`Posicionado em ${dayLabel} no Cronograma!`);
};

// =========================================================================
// PERSISTÊNCIA LOCALSTORAGE + FIREBASE
// =========================================================================
function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("tjpb_2026_v2_progress");
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
    const docRef = doc(db, "artifacts", appId, "users", currentUser.uid, "study_progress", "tjpb_v3");
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
// RENDERIZAÇÃO INTERLIGADA (ABA 1 <-> ABA 2 + BOTÕES APP GRAN)
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
            <span class="text-indigo-200 mr-1">Pacotes:</span> ${headerCodesLinked}
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-slate-100 text-slate-700 border-b border-slate-200">
                <th class="p-2.5 w-20 text-center">Dia</th>
                <th class="p-2.5 w-1/3">Bloco 1: Básica (45–60m)</th>
                <th class="p-2.5">Bloco 2: Específica de TI em Hiperfoco (2h–2h30)</th>
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

        const b1JumpBtn = d.b1Target
          ? `<div class="mt-1.5 no-print">
               <button onclick="jumpToTab2Topic('${d.b1Target}', '${rowId}', '${d.day}')" class="inline-flex items-center gap-1 text-[11px] font-extrabold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-2 py-0.5 rounded-md transition cursor-pointer">
                 🔗 Ver 4 Fontes na Aba 2 →
               </button>
             </div>`
          : "";

        const b2JumpBtn = d.b2Target
          ? `<div class="mt-1.5 no-print">
               <button onclick="jumpToTab2Topic('${d.b2Target}', '${rowId}', '${d.day}')" class="inline-flex items-center gap-1 text-[11px] font-extrabold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-300 px-2.5 py-0.5 rounded-md transition cursor-pointer">
                 🔗 Abrir 4 Fontes Deste Tópico na Aba 2 →
               </button>
             </div>`
          : "";

        html += `
          <tr id="${rowId}" class="hover:bg-slate-50/80 transition-colors">
            <td class="p-2.5 text-center font-extrabold text-indigo-950 whitespace-nowrap">${d.day}</td>
            <td class="p-2.5 align-top leading-relaxed">${b1Html}${b1JumpBtn}</td>
            <td class="p-2.5 align-top font-medium text-slate-800 leading-relaxed">${b2Html}${b2JumpBtn}</td>
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
                  <input type="checkbox" data-save-id="${d.id}_teo" class="w-3.5 h-3.5 accent-indigo-600 rounded"> <span>Vídeo/PDF</span>
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
          <span class="font-bold text-slate-600 whitespace-nowrap">📝 Caderno de Erros / Dúvidas (${week.id.toUpperCase()}):</span>
          <input type="text" data-save-id="${week.id}_notes" placeholder="Anote os subtópicos para revisar ou aulas pendentes..." class="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-indigo-600">
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
}

function renderSourceCardOption(titleBadge, badgeColorClass, bgClass, textContent) {
  const linkedText = linkifyGranCodesInText(textContent);
  const primaryCode = extractPrimaryGranCode(textContent);
  const actionBtn = primaryCode
    ? `<button onclick="openGranCourse('${primaryCode}')" class="no-print mt-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] px-2.5 py-1.5 rounded-lg shadow-2xs transition flex items-center justify-center gap-1 cursor-pointer">
         <span>🚀</span> Abrir no App Gran ${/^\d+$/.test(primaryCode) ? `(Cód. ${primaryCode})` : ""}
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

function renderSyllabus() {
  const container = document.getElementById("syllabusContainer");
  if (!container) return;
  const query = (document.getElementById("syllabusSearchInput")?.value || "").toLowerCase().trim();

  const filtered = SYLLABUS_DATA.filter((item) => {
    const matchCat = currentCategoryFilter === "ALL" || item.cat === currentCategoryFilter;
    if (!matchCat) return false;
    if (!query) return true;
    const fullText = `${item.id} ${item.catTitle} ${item.topic} ${item.f1} ${item.f2} ${item.f3} ${item.f4}`.toLowerCase();
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
      const scheduledDays = getScheduledDaysForTopic(item.id);
      const scheduleBadges =
        scheduledDays.length > 0
          ? `<div class="no-print flex flex-wrap items-center gap-1 mt-1">
               <span class="text-[10px] font-bold text-slate-500">📅 Dias na Aba 1:</span>
               ${scheduledDays
                 .map(
                   (sd) => `
                 <button onclick="jumpBackToDayRow('${sd.rowId}', '${sd.label}')" class="bg-indigo-100 hover:bg-indigo-200 text-indigo-900 font-bold text-[10px] px-2 py-0.5 rounded-full transition cursor-pointer" title="Voltar para ${sd.label} na Aba 1">
                   ⬅️ ${sd.label}
                 </button>
               `
                 )
                 .join("")}
             </div>`
          : "";

      html += `
        <div id="topic-card-${item.id}" class="p-4 transition-all ${item.isGap ? "bg-rose-50/50" : "hover:bg-slate-50/70"}">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
            <div class="flex items-start gap-2.5">
              <input type="checkbox" data-save-id="syl_done_${item.id}" class="mt-1 w-4 h-4 accent-indigo-600 rounded shrink-0">
              <div>
                <h4 class="font-extrabold text-xs sm:text-sm text-slate-900">${item.topic}</h4>
                ${scheduleBadges}
              </div>
            </div>
            ${item.isGap ? '<span class="bg-rose-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase self-start shrink-0">Lacuna / Em Produção no 212091</span>' : ""}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            ${renderSourceCardOption("Opção 1 (Prioritária FGV/TJPB)", "text-indigo-800", "bg-indigo-50/70 border border-indigo-200", item.f1)}
            ${renderSourceCardOption("Opção 2 (Alternativa FGV/Tribunais)", "text-teal-800", "bg-teal-50/70 border border-teal-200", item.f2)}
            ${renderSourceCardOption("Opção 3 (Complementar / Isolado)", "text-slate-700", "bg-slate-50 border border-slate-200", item.f3)}
            ${renderSourceCardOption("Opção 4 (Quarta Fonte / PDF)", "text-amber-900", "bg-amber-50/60 border border-amber-200", item.f4)}
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
  grid.innerHTML = GRAN_CODES.map(
    (c) => `
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-2">
      <div>
        <div class="flex items-center justify-between gap-2">
          <span class="bg-indigo-900 text-teal-300 font-black px-2.5 py-0.5 rounded-lg text-xs">Cód. ${c.code}</span>
          <span class="text-[11px] font-bold text-slate-500">${c.focus}</span>
        </div>
        <p class="font-extrabold text-slate-900 mt-1.5">${c.name}</p>
        <p class="text-slate-600 text-[11px] mt-1">${c.role}</p>
      </div>
      <div class="no-print mt-2 flex flex-wrap gap-2">
        <button onclick="openGranCourse('${c.code}')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1">
          <span>🚀</span> Abrir no App Gran (${c.code})
        </button>
        <button onclick="copyGranCode('${c.code}')" class="bg-white hover:bg-indigo-50 text-indigo-800 border border-indigo-200 font-bold text-[11px] px-3 py-1.5 rounded-lg transition cursor-pointer">
          📋 Só Copiar Código
        </button>
      </div>
    </div>
  `
  ).join("");
}

// =========================================================================
// FUNÇÕES DE NAVEGAÇÃO DE ABAS, BUSCA E BACKUP
// =========================================================================
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

  if (tabId === "tab-cronograma") {
    const returnBar = document.getElementById("returnToScheduleBar");
    if (returnBar) returnBar.classList.add("hidden");
  }

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
  showToast(`Código ${code} copiado para a área de transferência!`);
};

window.exportBackupJSON = function () {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", "backup_cronograma_tjpb_2026_v3.json");
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

// =========================================================================
// INICIALIZAÇÃO DE GRÁFICOS E CONEXÃO FIREBASE
// =========================================================================
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
      const docRef = doc(db, "artifacts", appId, "users", user.uid, "study_progress", "tjpb_v3");
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
            label: "Semanas com Foco Direto",
            data: [12, 12, 4, 3, 3, 4],
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
