// =========================================================================
// PARTE 3 DE 4: dados-edital.js
// Banco de Dados do Edital Verticalizado (Aba 2) com 4 Fontes e IDs de Linkagem
// =========================================================================

export const SYLLABUS_DATA = [
  // ---------------- BLOCO I: LÍNGUA PORTUGUESA ----------------
  {
    id: "PORT_1",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "1. Compreensão e interpretação de textos de gêneros variados",
    f1: "TJPB IA (212093), Segurança (212092) e Ciência de Dados (212094): Módulo da Prof.ª Tereza Cavalcanti (Interpretação I e II, Atos de Comunicação, Funções da Linguagem, Intertextualidade + Provas FGV 2026 AL-GO e TJRJ).",
    f2: "Curso Isolado: Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley (Construção do Texto e Sentido, A Linguagem e a Lógica, Atos de Fala, Discurso Direto/Indireto/Indireto Livre).",
    f3: "Curso Isolado: Língua Portuguesa para Concurso - FGV em Exercícios — Prof.ª Ludimilla Costa (10 a 20 videoaulas focadas na lógica interpretativa da FGV).",
    f4: "Interpretação de Texto para Concursos — Prof. Fernando Moura (CLDF / Carreiras) ou Prof. Lucas Lemos / Prof.ª Letícia Bastos."
  },
  {
    id: "PORT_2",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "2. Reconhecimento de tipos e gêneros textuais",
    f1: "TJPB Segurança (212092) e Ciência de Dados (212094): Aulas da Prof.ª Tereza Cavalcanti (Modos de Organização Discursiva [37m], Tipos Textuais [35m] e Exercícios FGV [40m]).",
    f2: "Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley (Gênero do Texto: Literário e Não Literário, Narrativo, Descritivo e Argumentativo - Modos de Organização I e II).",
    f3: "DATAPREV - Perfil 3 (Cód. 207803) e Perfil 11 (Cód. 207807) (Banca FGV): Tópico 2 (Reconhecimento de tipos e gêneros textuais) em vídeo e PDF.",
    f4: "FGV em Exercícios — Prof.ª Ludimilla Costa + aulas de Tipologia Textual do Prof. Fernando Moura."
  },
  {
    id: "PORT_3",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "3. Domínio da ortografia oficial",
    f1: "TJPB Segurança da Informação (Cód. 212092): Tópico 3 (Domínio da ortografia oficial), Aulas Questões Ortográficas I, II e III com Prof. Claiton Natal.",
    f2: "TRT 8ª Região - Analista TI (Cargo 04) e Técnico TI (Cargo 23): Aulas Acentuação Gráfica [29m] e Questões Ortográficas [31m] com Prof. Claiton Natal.",
    f3: "DATAPREV - Perfil 11 (FGV - Cód. 207807): Tópico 3 (Domínio da ortografia oficial).",
    f4: "Gramática Aplicada para Concursos — Prof. Elias Santana / Prof. Márcio Wesley."
  },
  {
    id: "PORT_4",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "4. Domínio dos mecanismos de coesão textual e 4.1 Referenciação, substituição, repetição, conectores e sequenciação textual",
    f1: "TJPB Segurança (212092) e Ciência de Dados (212094): Aulas da Prof.ª Tereza Cavalcanti (Marcas de Textualidade: Coesão, Coerência e Intertextualidade [39m], Coesão Textual, Exercícios [39m] e Coesão - Conectivos [39m]).",
    f2: "Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley (Mecanismos de Coesão e Coerência Textual I [29m], II [39m] e III [30m]).",
    f3: "MP SE - Analista de Banco de Dados: Módulo Conectivos (Introdução e aprofundamento) com Prof. Claiton Natal.",
    f4: "FGV em Exercícios — Prof.ª Ludimilla Costa / Gramática FGV — Prof. Lucas Lemos."
  },
  {
    id: "PORT_4_2",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "4.2 Emprego de tempos e modos verbais",
    f1: "TJPB Desenvolvimento (212091) e Segurança (212092): Aulas de Classes de Palavras e Aula 4 - Conjugação Verbal [25m51s] com Prof. Claiton Natal.",
    f2: "Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley: Aula específica Emprego de Tempos e Modos dos Verbos em Português [30m49s].",
    f3: "DATAPREV - Perfil 11 (FGV - Cód. 207807): Tópico 4.2 (Emprego de tempos e modos verbais).",
    f4: "FGV em Exercícios — Prof.ª Ludimilla Costa (questões de correlação verbal na FGV)."
  },
  {
    id: "PORT_5_1",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "5. Domínio da estrutura morfossintática do período e 5.1 Emprego das classes de palavras",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Tópico 2 (Classes de Palavras I a X — 10 aulas) e Tópico 3 (Morfossintaxe I a III, Termos ligados ao Verbo e ao Nome — 12 aulas) com Prof. Claiton Natal.",
    f2: "Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley (Morfologia: Reconhecimento, Emprego e Sentido das Classes Gramaticais I e II; Sintaxe: Termos da Oração).",
    f3: "DATAPREV - Perfil 1: Análise de Negócio de TI (FGV - Cód. 207800): Tópico 5.1 completo com Prof. Claiton Natal.",
    f4: "Gramática para Concursos (Banca FGV) — Prof. Lucas Lemos / Prof.ª Ludimilla Costa."
  },
  {
    id: "PORT_5_2",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "5.2 Relações de coordenação e 5.3 Relações de subordinação entre orações e entre termos da oração",
    f1: "TJPB Desenvolvimento (212091 - Já Disponível!) e IA (212093): Tópico 4 (Subordinadas Adjetivas, Substantivas e Adverbiais — 10 aulas) e Tópico 5 (Coordenadas, Adversativas x Concessivas, Explicativas x Causais) com Prof. Claiton Natal.",
    f2: "Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley (Processos de Coordenação e Subordinação [27m] e Paralelismo Sintático e Semântico I e II).",
    f3: "Língua Portuguesa - FGV em Exercícios — Prof.ª Ludimilla Costa.",
    f4: "DATAPREV - Perfil 3 (207803) e Perfil 11 (207807) (Banca FGV): Tópicos 5.2 e 5.3 em vídeo e PDF."
  },
  {
    id: "PORT_5_4",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "5.4 Emprego dos sinais de pontuação",
    f1: "TJPB Inteligência Artificial (Cód. 212093 - Já Disponível!): Tópico 6 (5.4 Emprego dos sinais de pontuação), Aulas Pontuação I [28m], Pontuação II [27m] e Pontuação entre Coordenadas [33m] com Prof. Claiton Natal.",
    f2: "Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley (Pontuação e Efeitos de Sentido).",
    f3: "DATAPREV - Perfil 11 (FGV - Cód. 207807): Tópico 5.4 (Emprego dos sinais de pontuação).",
    f4: "FGV em Exercícios — Prof.ª Ludimilla Costa."
  },
  {
    id: "PORT_5_5",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "5.5 Concordância verbal e nominal e 5.6 Regência verbal e nominal",
    f1: "TJPB Segurança (212092) e IA (212093 - Já Disponíveis!): Em 212092, Tópico 5.5 (Concordância I, II e Exercícios I e II); em 212093, Tópico 7 (Regência I, II e III) com Prof. Claiton Natal.",
    f2: "Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley (Transitividade e Regência de Nomes e Verbos [19m] e Concordância Verbal e Nominal I e II [32m]).",
    f3: "DATAPREV - Perfil 11 (FGV - Cód. 207807): Tópicos 5.5 e 5.6 completos.",
    f4: "FGV em Exercícios — Prof.ª Ludimilla Costa / Prof. Lucas Lemos."
  },
  {
    id: "PORT_5_7",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "5.7 Emprego do sinal indicativo de crase e 5.8 Colocação dos pronomes átonos",
    f1: "Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley: Aulas Emprego do Sinal Indicativo de Crase [24m22s] e Padrões Gerais de Colocação Pronominal.",
    f2: "TJPB Desenvolvimento (212091) e Segurança (212092): Aula de Colocação Pronominal e Regência/Crase com Prof. Claiton Natal.",
    f3: "DATAPREV - Perfil 11 (FGV - Cód. 207807): Tópicos 5.7 e 5.8 completos.",
    f4: "FGV em Exercícios — Prof.ª Ludimilla Costa."
  },
  {
    id: "PORT_6",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "6. Reescrita de frases e parágrafos: 6.1 Significação das palavras; 6.2 Substituição; 6.3 Reorganização de orações/períodos; 6.4 Reescrita em diferentes gêneros e níveis de formalidade",
    f1: "TJPB Segurança (212092) e Ciência de Dados (212094): Módulo da Prof.ª Tereza Cavalcanti (Semântica: Sinônimos, Antônimos, Parônimos e Hiperônimos [41m] + Reorganização e Reescrita).",
    f2: "MPU (Cargo A32 - FGV): Aula Semântica - Significação Literal e Contextual (Polissemia e Ambiguidade) [39m] + Intensivo FGV — Prof. Márcio Wesley (Equivalência e Transformação - Reescrita [35m] e Variação Linguística I e II).",
    f3: "TRF 3ª Região - Desenvolvimento de Sistemas (Cód. 212301): Módulo Redação (confronto de frases corretas/incorretas, reorganização de períodos e equivalência de estruturas) com Prof. Márcio Wesley.",
    f4: "FGV em Exercícios — Prof.ª Ludimilla Costa."
  },
  {
    id: "PORT_6_5",
    cat: "PORT",
    catTitle: "MÓDULO I — LÍNGUA PORTUGUESA (10 Questões • Estilo FGV)",
    topic: "6.5 Redação Oficial (Manual de Redação da Presidência da República)",
    f1: "TJPB Segurança da Informação (Cód. 212092 - Já Disponível!) e TJPB Desenvolvimento (212091): Grade completa de 25 videoaulas com Prof. Márcio Wesley (Atributos, Padrão Ofício, Fechos, Formas de Tratamento, E-mail, Exposição de Motivos, Mensagem, Parecer, Atos Normativos).",
    f2: "Língua Portuguesa Intensiva para FGV — Prof. Márcio Wesley: Versão sintética e direta em 2 videoaulas (Redação de Correspondência Oficial I [31m] e II).",
    f3: "MPU - Desenvolvimento de Sistemas (FGV - Cód. 210869): Material em PDF e vídeo de Redação Oficial.",
    f4: "Curso de Redação Oficial em PDF (Livro Eletrônico) — Prof. Claiton Natal / Prof. Fernando Moura."
  },

  // ---------------- BLOCO II: RACIOCÍNIO LÓGICO E MATEMÁTICO ----------------
  {
    id: "RLM_1",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "1. Conjuntos numéricos (naturais, inteiros, racionais, irracionais, reais, operações, MMC/MDC, frações e diagramas de Venn)",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Tópico 1 (11 videoaulas completas de Conjuntos Numéricos, Frações, MMC/MDC e Operações com Conjuntos) com Prof. Wagner Aguiar.",
    f2: "TJRJ (Cód. 194432 - Banca FGV) / Curso Raciocínio Lógico para Concursos: Módulo de Conjuntos com Prof. Marcelo Leite & Prof. Thiago Cardoso.",
    f3: "Raciocínio Lógico para Concursos — Prof. André Arruda (Cód. 180207 / Banco do Brasil).",
    f4: "Matemática para Concursos — Prof. Josimar Padilha (ou PDF de Conjuntos do Prof. Pedro Campos)."
  },
  {
    id: "RLM_2",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "2. Razões e proporções e 3. Regra de três simples e composta",
    f1: "TJRJ (Cód. 194432 - Banca FGV): Tópico 3 (Razões, Proporções, Divisão Proporcional e Regra de Três Simples e Composta) com Prof. Marcelo Leite & Prof. Thiago Cardoso.",
    f2: "TJPB Desenvolvimento (Cód. 212091) / Matemática para Concursos — Prof. Wagner Aguiar (Módulo de Razão, Proporção e Regra de Três).",
    f3: "TRF 3ª Região - Desenvolvimento de Sistemas (Cód. 212301) / Matemática para Concursos — Prof. Josimar Padilha.",
    f4: "Raciocínio Lógico e Matemático (Cód. 180207) — Prof. André Arruda / Resolução de Questões FGV — Prof. Paulo Henrique (PH)."
  },
  {
    id: "RLM_4",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "4. Porcentagem",
    f1: "TJRJ (Cód. 194432 - Banca FGV): Aulas de Porcentagem, Aumentos e Descontos Sucessivos com Prof. Marcelo Leite & Prof. Thiago Cardoso.",
    f2: "TJPB Desenvolvimento (Cód. 212091) / Matemática Financeira — Prof. Wagner Aguiar.",
    f3: "TRF 3ª Região - Desenvolvimento (Cód. 212301) / Matemática para Concursos — Prof. Josimar Padilha.",
    f4: "Matemática (Cód. 180207) — Prof. André Arruda / Imersão FGV em Questões — Prof. Paulo Henrique (PH)."
  },
  {
    id: "RLM_5",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "5. Juros simples e compostos",
    f1: "TJPB Desenvolvimento (Cód. 212091) / Matemática Financeira para Concursos — Prof. Wagner Aguiar (Juros Simples, Juros Compostos, Taxas Equivalentes e Proporcionais).",
    f2: "TJRJ (Cód. 194432 - Banca FGV): Tópico 3, Item 14 (Juros Simples e Compostos) com Prof. Marcelo Leite & Prof. Thiago Cardoso.",
    f3: "Carreiras Fiscais (Cód. 202271) / Matemática Financeira — Prof. Wagner Ribeiro.",
    f4: "Matemática Financeira — Prof. André Arruda / Prof. Josimar Padilha."
  },
  {
    id: "RLM_6",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "6. Equações, inequações e sistemas de equações",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Tópico 2 (Equações de 1º e 2º graus, Inequações e Sistemas Lineares) com Prof. Wagner Aguiar.",
    f2: "DATAPREV - Perfil 4: Inteligência da Informação (FGV): Módulo de Álgebra e Sistemas Lineares I a V.",
    f3: "Matemática (Cód. 180207) — Prof. André Arruda / Prof. Josimar Padilha.",
    f4: "Livro Eletrônico (PDF) de Raciocínio Lógico-Matemático — Prof. Thiago Cardoso / Prof. Pedro Campos."
  },
  {
    id: "RLM_7",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "7. Funções (afim, quadrática, exponencial, logarítmica e gráficos)",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Tópico 2 (Estudo das Funções) com Prof. Wagner Aguiar.",
    f2: "Matemática para Concursos — Prof. Josimar Padilha (Funções de 1º e 2º Graus, Exponencial e Logarítmica).",
    f3: "Matemática (Cód. 180207) — Prof. André Arruda.",
    f4: "Módulo de Funções e Gráficos em PDF — Prof. Thiago Cardoso / Prof. Marcelo Leite."
  },
  {
    id: "RLM_8",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "8. Sequências (numéricas, alfabéticas, datas/calendário, posicionais, figurais, PA e PG)",
    f1: "Raciocínio Lógico para Concursos (Cód. 180207) — Prof. André Arruda (5 videoaulas: Sequência de Números, Letras, Datas/Calendário, Posicional e Figuras) + PDF Prof. Thiago Cardoso.",
    f2: "TJPB Desenvolvimento de Sistemas (Cód. 212091): Módulo de Sequências com Prof. Wagner Aguiar.",
    f3: "Raciocínio Lógico para Concursos (Cód. 202271) — Prof. Sérgio Carvalho.",
    f4: "Raciocínio Lógico no estilo FGV — Prof. Josimar Padilha / Prof. Paulo Henrique (PH)."
  },
  {
    id: "RLM_9",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "9. Matrizes e determinantes",
    f1: "Raciocínio Lógico e Matemática (Cód. 180207) — Prof. André Arruda (Resolução de Problemas Matriciais, Geométricos e Aritméticos I a III).",
    f2: "DATAPREV - Perfil 4: Inteligência da Informação (FGV): Módulo de Matrizes, Determinantes e Sistemas Lineares I a V.",
    f3: "TJPB Desenvolvimento de Sistemas (Cód. 212091) — Prof. Wagner Aguiar.",
    f4: "Livro Eletrônico (PDF) de Matrizes, Determinantes e Sistemas — Prof. Thiago Cardoso / Prof. Josimar Padilha."
  },
  {
    id: "RLM_10",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "10. Probabilidade",
    f1: "Raciocínio Lógico (Cód. 180207) — Prof. André Arruda & Prof. Thiago Cardoso (Definição, Probabilidade da União, Condicional e Eventos Independentes).",
    f2: "TJRJ (Cód. 194432 - Banca FGV) e Cód. 202271: Módulos de Análise Combinatória e Probabilidade com Prof. Marcelo Leite e Prof. Sérgio Carvalho.",
    f3: "TJPB Inteligência Artificial (Cód. 212093) e Ciência de Dados (Cód. 212094): Tópico 4 (Probabilidade e distribuições binomial, Poisson e normal).",
    f4: "Raciocínio Lógico para Concursos — Prof. Josimar Padilha (Probabilidade em exercícios FGV)."
  },
  {
    id: "RLM_11",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "11. Análise combinatória (princípio fundamental da contagem, permutações, arranjos e combinações)",
    f1: "Raciocínio Lógico (Cód. 180207) — Prof. André Arruda & Prof. Thiago Cardoso.",
    f2: "TJRJ (Cód. 194432 - Banca FGV): Tópico 2 com Prof. Marcelo Leite.",
    f3: "Curso Raciocínio Lógico (Cód. 202271) — Prof. Sérgio Carvalho.",
    f4: "Raciocínio Lógico para Concursos — Prof. Josimar Padilha / Prof. Paulo Henrique (PH)."
  },
  {
    id: "RLM_12",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "12. Estatística descritiva (média, mediana, moda, quartis, amplitude, variância, desvio padrão e coeficiente de variação)",
    f1: "TJPB Inteligência Artificial (Cód. 212093) e Ciência de Dados (Cód. 212094): Tópico 4 (Estatística Descritiva: Medidas de Tendência Central e Dispersão) com Prof. Thiago Cardoso.",
    f2: "Raciocínio Lógico (Cód. 194432 - Banca FGV): Tópico 2, Item 10 (Noções de Estatística: tabelas, gráficos e medidas de posição) com Prof. Marcelo Leite & Prof. Thiago Cardoso.",
    f3: "CGU - Ciência de Dados (Cód. 211795) / DATAPREV Perfil 4 (FGV).",
    f4: "Estatística para Concursos — Prof. Sérgio Carvalho / Prof. Pedro Campos."
  },
  {
    id: "RLM_13",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "13. Proposições lógicas e 14. Conectivos lógicos",
    f1: "Curso Raciocínio Lógico (Cód. 202271) — Prof. Sérgio Carvalho (11 videoaulas de Proposições Simples/Compostas e Operadores Lógicos).",
    f2: "Raciocínio Lógico para Concursos (Cód. 180207) — Prof. André Arruda.",
    f3: "Raciocínio Lógico (Cód. 194432) — Prof. Marcelo Leite / SEFAZ BA — Prof. Wagner Aguiar.",
    f4: "Raciocínio Lógico (ALERJ / SEPLAG-RJ - Banca FGV) — Prof. Josimar Padilha."
  },
  {
    id: "RLM_15",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "15. Tabelas-verdade (construção, tautologia, contradição e contingência)",
    f1: "Curso Raciocínio Lógico (Cód. 202271) — Prof. Sérgio Carvalho.",
    f2: "Raciocínio Lógico para Concursos (Cód. 180207) — Prof. André Arruda.",
    f3: "Raciocínio Lógico (Cód. 194432) — Prof. Marcelo Leite.",
    f4: "Raciocínio Lógico (Foco FGV) — Prof. Josimar Padilha / Prof. Paulo Henrique (PH)."
  },
  {
    id: "RLM_16",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "16. Equivalências e negações (Leis de De Morgan, contrapositiva e negação de quantificadores)",
    f1: "Curso Raciocínio Lógico (Cód. 202271) — Prof. Sérgio Carvalho (Aulas de Equivalências da Condicional e Leis de De Morgan).",
    f2: "Raciocínio Lógico (Cód. 180207) — Prof. André Arruda (Negação de Proposição Composta e Equivalências Lógicas).",
    f3: "Raciocínio Lógico (Cód. 194432) — Prof. Marcelo Leite.",
    f4: "Imersão FGV — Resolução de Questões com Prof. Josimar Padilha e Prof. Paulo Henrique (PH)."
  },
  {
    id: "RLM_17",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "17. Argumentação lógica e 18. Diagramas lógicos",
    f1: "Raciocínio Lógico (Cód. 180207) — Prof. André Arruda (Equivalência e Negações de Proposições Categóricas, Diagramas Lógicos e Validade de um Argumento).",
    f2: "Raciocínio Lógico (Cód. 194432) — Prof. Marcelo Leite & Prof. Thiago Cardoso (Aulas/PDFs de Lógica de Argumentação e Diagramas Lógicos).",
    f3: "Curso Raciocínio Lógico (Cód. 202271) — Prof. Sérgio Carvalho.",
    f4: "Raciocínio Lógico para Concursos — Prof. Josimar Padilha / Prof. Paulo Henrique (PH)."
  },
  {
    id: "RLM_19",
    cat: "RLM",
    catTitle: "MÓDULO I — RACIOCÍNIO LÓGICO E MATEMÁTICO (10 Questões • Estilo FGV)",
    topic: "19. Resolução de problemas envolvendo raciocínio lógico-matemático (verdades e mentiras, associação lógica, orientação espacial/temporal e casa dos pombos)",
    f1: "Raciocínio Lógico (Cód. 180207) — Prof. André Arruda (Associação Lógica I e II, Implicação Lógica I e II, Verdades e Mentiras I e II, Lógica de 1ª Ordem e Raciocínio Crítico).",
    f2: "Raciocínio Lógico (Cód. 202271) — Prof. Sérgio Carvalho.",
    f3: "Raciocínio Lógico (Cód. 194432) — Prof. Marcelo Leite & Prof. Thiago Cardoso.",
    f4: "Imersão FGV - Resolução de Questões — Prof. Paulo Henrique (PH) e Prof. Josimar Padilha."
  },

  // ---------------- BLOCO III: FUNDAMENTOS DE TI ----------------
  {
    id: "FUND_1_1",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 1.1 Arquitetura de computadores",
    f1: "TJ RJ - Analista de Sistemas (FGV - Cód. 198499): Módulo Hardware e Conceitos Básicos de Software com Prof. Maurício Franceschini (Memórias Primárias [31m], História/Organização/Arquitetura e Memórias Secundárias [42m]).",
    f2: "DATAPREV - Perfil 2: Arquitetura e Sustentação (FGV - Cód. 207802) / TJPB Infraestrutura de TI.",
    f3: "SED SC - Analista de Informática: Aulas de Arquitetura de Computadores e Hierarquia de Memória com Prof. Edward Melo.",
    f4: "CRP SP - Especialista em TIC / PDF de Arquitetura de Computadores — Prof. Maurício Franceschini."
  },
  {
    id: "FUND_1_2",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 1.2 Sistemas operacionais",
    f1: "TJ RJ - Analista de IA / Gestão de TIC (FGV): Módulo Sistemas Operacionais (gerenciamento de processos, threads, memória e E/S) com Prof. Jósis Alves.",
    f2: "MPU - Cargo A32: Suporte e Infraestrutura (FGV) / DATAPREV Perfil 13: Módulo Sistemas Operacionais com Prof. Jósis Alves e Prof. Cleirton Monte.",
    f3: "DPE PB - Desenvolvimento de Sistemas (Cód. 210973) / Marinha do Brasil: Aulas Comunicação e Sincronização entre Processos (Aula 10) e Gerência de Memória (Aula 13) com Prof. Jósis Alves.",
    f4: "IFCE - Analista de TI: Módulo de Sistemas Operacionais Linux/Windows com Prof. Cleirton Monte / Maurício Franceschini."
  },
  {
    id: "FUND_1_3",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 1.3 Redes de computadores e protocolos TCP/IP",
    f1: "MPU - Cargo A32: Suporte e Infraestrutura (FGV) / AMAZUL (FGV): Módulos de Arquitetura TCP/IP, IPv4/IPv6, VLAN (IEEE 802.1Q), DHCP, DNS e Roteamento OSPF, BGP, RIP.",
    f2: "Curso Isolado: Redes de Computadores para Concursos — Prof. Edward Melo (Modelo OSI, TCP/IP, IPv4/IPv6, Switching, VLAN e Roteamento).",
    f3: "DPE PB - Analista - Suporte e Infraestrutura de Redes (Pós-Edital): Módulo completo de Redes e Protocolos.",
    f4: "TJPB Gestão de Governança de TI (Cód. 212088) / Infraestrutura de TI — Prof. Edward Melo e Prof. Maurício Franceschini."
  },
  {
    id: "FUND_1_4",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 1.4 Bancos de dados (Fundamentos) e 1.5 Computação em nuvem (Fundamentos)",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Módulo de Banco de Dados com Prof. Washington Almeida + Módulo de Computação em Nuvem (12 aulas com Prof. Vitor Kessler + Contratação de Nuvem com Prof. Darlan Venturelli).",
    f2: "TJ RJ - Analista de Sistemas (FGV - Cód. 198499): Tópico 1 (Fundamentos de Computação em Nuvem - 9 aulas com Vitor Kessler) e Banco de Dados.",
    f3: "TCU - Auditoria de TI (Cód. 198053) / CGU (Cód. 211797): Arquitetura de Nuvem e Governança Multi-Cloud com Prof. Vitor Kessler.",
    f4: "DATAPREV - Perfil 3 (FGV - Cód. 207803) / Curso BD — Prof. Paulo Sérgio."
  },
  {
    id: "FUND_2",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 2. Engenharia de Software: Ciclo de vida, Engenharia de requisitos, Arquitetura/integração, Metodologias ágeis (Scrum e Kanban), Qualidade e testes",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091): Módulo SOA e Web Services (Prof. Gabriel Pacheco) + Engenharia de Software: Scrum, Kanban, Qualidade e Estágio de Teste I a X (Prof. Washington Almeida).",
    f2: "TJ RJ - Analista de Sistemas (FGV - Cód. 198499): Tópico 2 (Engenharia de Software — 39 videoaulas completas já gravadas com Prof. Washington Almeida).",
    f3: "Curso Isolado: Carreira de TI para Concursos - Gestão Ágil de Projetos (Cód. 210948) com Prof. Darlan Venturelli.",
    f4: "MPU - Desenvolvimento de Sistemas (FGV - Cód. 210869) — Prof. Maurício Franceschini / Washington Almeida."
  },
  {
    id: "FUND_3",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 3. Segurança da Informação: Confidencialidade, integridade e disponibilidade (CID); Controle de acesso; Gestão de riscos e incidentes; Continuidade de negócios; LGPD (Lei 13.709/2018); Normas ISO/IEC 27001, 27002 e 27005",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Módulo Normas ISO/IEC 27001, 27002 e 27005 com Prof. Jósis Alves (Jozias Oliveira — 13+ videoaulas) + Conceitos de Segurança I a III com Prof. Gabriel Pacheco.",
    f2: "TJPB Segurança da Informação (Cód. 212092) / Curso Isolado Carreira de TI - ISO/IEC 22301:2020 (Continuidade de Negócios) com Prof. Darlan Venturelli.",
    f3: "TRF 3ª Região - Desenvolvimento de Sistemas (Cód. 212301): Aulas Lei nº 13.709/2018 - LGPD I, II e III com Prof. Maurício Franceschini.",
    f4: "PC AL / ISS Curitiba (Segurança da Informação I a VII com Prof. Fabrício Melo) + Direito Digital (LGPD com Prof.ª Patrícia Quintão / Prof.ª Luciana)."
  },
  {
    id: "FUND_4",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 4. Governança e Gestão de TI: COBIT 2019 e ITIL 4; Planejamento estratégico; Gestão de projetos, processos e serviços de TI; Indicadores de desempenho; Contratações de soluções de TIC",
    f1: "TJPB Gestão de Governança de TI (Cód. 212088): Módulos já gravados de COBIT 2019, ITIL 4, Planejamento Estratégico (PDTIC/PCA) e Contratações Públicas de Soluções de TIC (Resolução CNJ nº 468/2022) com Prof. Darlan Venturelli.",
    f2: "DATAPREV - Perfil 6 (Gestão de Serviços de TIC - FGV) e Perfil 11 (Administração e Governança - Cód. 207807 — Prof. Darlan Venturelli, Bruno Eduardo e Rafael Barbosa).",
    f3: "Curso Isolado: Carreira de TI para Concursos - Contratações de TI (IN nº 94/2022 e Lei 14.133/2021) — Prof. Darlan Venturelli.",
    f4: "MPU - Cargo A32 (FGV) / TCU Auditoria de TI (Cód. 198053) — Prof. Maurício Franceschini e Prof. Darlan Venturelli."
  },
  {
    id: "FUND_5",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 5. Gestão de Dados e Inteligência Artificial: Modelagem e governança de dados (DAMA-DMBOK); SQL; Business Intelligence (BI); Fundamentos de IA, aprendizado de máquina e IA generativa",
    f1: "TJPB Ciência e Análise de Dados (Cód. 212094) e TJPB IA (Cód. 212093): Módulos de Qualidade e Governança de Dados (DAMA-DMBOK), SQL, Business Intelligence e IA.",
    f2: "DATAPREV - Perfil 3 (Cód. 207803) e Conhecimentos Básicos (FGV): Arquitetura de BI, Cubos e ETL (Prof. Washington Almeida), Governança de Dados (Prof.ª Patrícia Quintão) e Sistemas de IA / LLMs (Prof. Vitor Kessler).",
    f3: "TRF 4ª Região - Inteligência Artificial e Inovação para Todos os Cargos — Prof. Vitor Kessler, Tiago Oliveira e Wilson Garcia.",
    f4: "PC AL / IFPA (Pós-Edital): Aulas Noções de Inteligência Artificial I e II e Fundamentos de Modelos de Linguagem e Prompts em IA Generativa I e II com Prof. Fabrício Melo."
  },
  {
    id: "FUND_6",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 6. Transformação Digital no Poder Judiciário: Governo digital; Automação de processos; Interoperabilidade; ⚠️ Processo Judicial Eletrônico (PJe); Plataforma Digital do Poder Judiciário (PDPJ-Br); Acessibilidade digital",
    isGap: true,
    f1: "⚠️ SUPRIMENTO DE LACUNA (PJe não é ministrado no 212091!): Assistir no TRF 3ª Região - Técnico Desenvolvimento (Cód. 212301), Disciplina Tecnologias do Ecossistema PJe e PDPJ-Br, Aula Desenvolvimento no PJe [37m31s] com Prof. Darlan Venturelli.",
    f2: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Aula Resolução CNJ nº 335/2020 - PDPJ-Br [36m47s] com Prof. Darlan Venturelli + Governo Eletrônico (ePING/eMAG) com Prof. Rogério Araújo.",
    f3: "DPE PB - Desenvolvimento de Sistemas (Cód. 210973): Módulo Automação de processos (scripts, APIs, workflows e RPA), Interoperabilidade no setor público e PDPJ-Br.",
    f4: "Curso Isolado: Provimento Judicial Aplicado ao PJe — Prof. Francion Santos (ou aulas de PJe do Prof. Tiago Rabelo e Acessibilidade Web do Prof. Leandro Martins)."
  },
  {
    id: "FUND_7",
    cat: "FUND",
    catTitle: "MÓDULO II (PARTE COMUM) — FUNDAMENTOS DE TECNOLOGIA DA INFORMAÇÃO",
    topic: "Fund. 7. Normas de TIC no Poder Judiciário: Resoluções CNJ nº 370/2021, nº 396/2021, nº 468/2022, nº 615/2025; MoReq-Jus e Res. CNJ nº 522/2023; ⚠️ Gestão documental arquivística digital (metadados, ciclo de vida, preservação e RDC-Arq); ⚠️ PDTI TJPB 2024–2026",
    isGap: true,
    f1: "TJPB Desenvolvimento (212091) e TJPB Governança de TI (212088): Aulas já gravadas com Prof. Darlan Venturelli: Resolução CNJ nº 370/2021 (ENTIC-JUD), nº 468/2022 (Contratações TIC) e nº 522/2023 (MoReq-Jus); e Res. 396/2021 (ENSEC-PJ) no Cód. 212092.",
    f2: "TJ PE - Analista de Sistemas e Técnico Programador: Tópico 8.4 cobrindo conjuntamente as Resoluções do CNJ nº 185/2013, 335/2020, 370/2021, 396/2021, 468/2022 e 615/2025.",
    f3: "⚠️ SUPRIMENTO DE LACUNA (RDC-Arq não é ministrado no 212091!): Estudar nos cursos de Arquivologia para Concursos (Módulo de Documentos Digitais, Metadados, Preservação e RDC-Arq/CONARQ) com Prof. Elvis Miranda e Prof. Darlan Eterno + Governança de Metadados no Cód. 212094.",
    f4: "⚠️ SUPRIMENTO DE LACUNA (PDTI TJPB 2024–2026 não é ministrado no 212091!): Estudar a metodologia de PDTIC no Cód. 212088 / CGU 211798 (Tóp. 4.4) combinada à leitura direta do documento oficial PDTI 2024–2026 publicado pelo TJPB."
  },

  // ---------------- BLOCO IV: DESENVOLVIMENTO DE SISTEMAS (11 DOMÍNIOS) ----------------
  {
    id: "DEV_1_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 1 — ENGENHARIA DE SOFTWARE E PRÁTICAS ÁGEIS",
    topic: "1.1 Ciclo de vida de desenvolvimento de software (SDLC): fases e modelos tradicionais (cascata e iterativo) e 1.2 Metodologias ágeis: Scrum (papéis, eventos e artefatos)",
    f1: "TJ RJ - Analista de Sistemas (FGV - Cód. 198499): Tópico 2 (Engenharia de Software), Aulas Conceitos Gerais I a III, RUP I e II, Desenvolvimento Ágil I e II e Scrum I, II e III com Prof. Washington Almeida.",
    f2: "Curso Isolado: Carreira de TI para Concursos - Gestão Ágil de Projetos (Cód. 210948) com Prof. Darlan Venturelli.",
    f3: "DATAPREV - Perfil 13 (FGV) / BNB Desenvolvimento: Ciclo de Vida I a V (Prof. Darlan Venturelli) e Processo Iterativo e Incremental (Prof. Rogério Araújo).",
    f4: "SEPLAN AP - Analista de TI / TJ CE - Analista Ciência da Computação (Papéis de PO, Scrum Master e eventos Scrum)."
  },
  {
    id: "DEV_1_3",
    cat: "DEV",
    catTitle: "DOMÍNIO 1 — ENGENHARIA DE SOFTWARE E PRÁTICAS ÁGEIS",
    topic: "⚠️ 1.3 Kanban e Lean e ⚠️ 1.4 Agilidade em escala: Scaled Agile Framework (SAFe) e práticas de agilidade organizacional",
    isGap: true,
    f1: "⚠️ SUPRIMENTO DE LACUNA (SAFe não é ministrado no 212091!): Assistir no Curso Isolado Carreira de TI - Gestão Ágil de Projetos (Cód. 210948), Aula 1 - Práticas Ágeis em Escala - SAFe [28m45s] com Prof. Darlan Venturelli.",
    f2: "⚠️ SUPRIMENTO DE LACUNA (Lean não é ministrado no 212091!): Assistir em PROCERGS - Analista em Computação (Módulo Metodologias ágeis: Scrum, Kanban e Lean) e TJRJ (Cód. 198499, Aula 34 - Kanban e Tópicos Relevantes de Ágil I e II com Prof. Washington Almeida).",
    f3: "CEF - Caixa Econômica Federal - Técnico Bancário Novo TI: Módulo 7 (SAFe, Nexus, ágil em escala e ágil escalado).",
    f4: "MPU - Analista Desenvolvimento de Sistemas (FGV - Cód. 210869): PDF e videoaulas de Metodologias Ágeis e Agilidade Organizacional."
  },
  {
    id: "DEV_1_5",
    cat: "DEV",
    catTitle: "DOMÍNIO 1 — ENGENHARIA DE SOFTWARE E PRÁTICAS ÁGEIS",
    topic: "1.5 Engenharia de requisitos (elicitação, análise, especificação, validação, RF/RNF/RN, histórias de usuário, critérios de aceitação e backlog); 1.6 Métricas de dimensionamento (APF/IFPUG e estimativas ágeis); 1.7 SDD (especificação executável e harness de IA)",
    f1: "TJ RJ - Analista de Sistemas (FGV - Cód. 198499): Série de 7 videoaulas de Engenharia de Requisitos (I a VII), Métricas SISP/APF, BDD [25m] e ATDD [22m] com Prof. Washington Almeida.",
    f2: "PROCERGS / SEPLAN AP - Analista de TI: Aula 44 - Engenharia de Software - Pontos de Função [25m51s] com Prof. Washington Almeida.",
    f3: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Tópico 4 (Descoberta de necessidades, priorização, critérios de aceitação) e Tópico 4.3 (Agentes e ferramentas de IA e avaliação funcional).",
    f4: "DPE PB - Desenvolvimento de Sistemas (Cód. 210973): Tópico de TDD, BDD (Especificação Executável) e Uso responsável de assistentes de código baseados em IA."
  },
  {
    id: "DEV_2_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 2 — DESIGN DE SISTEMAS (SYSTEM DESIGN)",
    topic: "2.1 Abstração e modelagem de grande escala; 2.2 Trade-offs em sistemas distribuídos (latência vs. throughput, Teorema CAP, PACELC e BASE vs. ACID); 2.3 Comunicação síncrona (HTTP/REST, gRPC) e assíncrona (mensageria, WebSockets)",
    f1: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Módulos de Arquitetura Distribuída, Consistência Eventual vs Forte (CAP/PACELC/BASE/ACID) e Integração Síncrona/Assíncrona.",
    f2: "TCU - Auditoria de TI (Cód. 198053): Módulo de Sistemas Distribuídos Resilientes e Escaláveis com Prof. Vitor Kessler e Prof. Gabriel Pacheco.",
    f3: "MP ES - Analista de Sistemas / TRF 3ª Região (Cód. 212301): Aulas de HTTP/REST, gRPC, WebSockets e Mensageria com Prof. Gunter Amorim e Prof.ª Ana Júlia.",
    f4: "TJPB Desenvolvimento de Sistemas (Cód. 212091): Módulo de Interoperabilidade e Arquitetura de Microsserviços."
  },
  {
    id: "DEV_2_4",
    cat: "DEV",
    catTitle: "DOMÍNIO 2 — DESIGN DE SISTEMAS (SYSTEM DESIGN)",
    topic: "2.4 Escalabilidade horizontal/vertical e Alta disponibilidade (failover, clustering, load balancing, replicação e sharding); 2.5 Cache em camadas (client-side, CDN, aplicação e Redis); 2.6 Resiliência e controle de tráfego (Circuit Breaker, Graceful Degradation, NGINX e HAProxy)",
    f1: "DPE PB - Analista - Desenvolvimento de Sistemas (Cód. 210973): Módulo completo de Resiliência em Sistemas Distribuídos (API Gateway, Service Discovery, Circuit Breaker, Retries, Fallbacks e Balanceamento de Carga).",
    f2: "DPDF - Cargo 3 (Banco de Dados) e TRF 3ª Região (Cód. 212301) / TJPB 212091: Aulas específicas de Banco em Memória e Cache Distribuído (Redis: casos de uso e políticas de expiração TTL/LRU) com Prof. Vitor Kessler.",
    f3: "TCU - Auditoria de TI (Cód. 198053) e TJPB Infraestrutura de TI: Módulos de Alta Disponibilidade, Failover, Clustering, Replicação, Sharding e Proxies Reversos (NGINX e HAProxy).",
    f4: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Tópico de Escalabilidade, Desempenho, Cache e Tolerância a Falhas."
  },
  {
    id: "DEV_3_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 3 — ARQUITETURA DE SOFTWARE E PADRÕES",
    topic: "3.1 Padrões de projeto GoF (criacionais, estruturais e comportamentais); 3.2 Padrões de arquitetura corporativa, inversão de controle (IoC) e injeção de dependência (DI); 3.3 SOA (RESTful e SOAP) e APIs",
    f1: "TJ RJ - Analista de Sistemas (FGV - Cód. 198499) e TJPB 212091: Série de 13 videoaulas de Padrões de Projeto GoF com Prof. Júlio Leitão + SOA e Web Services RESTful/SOAP com Prof. Gabriel Pacheco.",
    f2: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Módulos de Padrões de Arquitetura Corporativa, Inversão de Controle (IoC) e Injeção de Dependência com Prof.ª Ana Júlia e Prof. Rogério Araújo.",
    f3: "Petrobras Ênfase 4 / SEFAZ SC: Módulos de Padrões GoF e Arquitetura de Software com Prof. Washington Almeida.",
    f4: "DATAPREV - Perfil 2 (Cód. 207802) e Perfil 3 (Cód. 207803) (Banca FGV): Arquitetura Orientada a Serviços e Design Patterns."
  },
  {
    id: "DEV_3_4",
    cat: "DEV",
    catTitle: "DOMÍNIO 3 — ARQUITETURA DE SOFTWARE E PADRÕES",
    topic: "3.4 Microsserviços (decomposição, API Gateway, Service Mesh e Serverless); 3.5 EDA (mensageria e pub/sub com Kafka e RabbitMQ); ⚠️ 3.6 Clean Architecture e DDD; ⚠️ 3.7 Métricas de qualidade arquitetural (MTTR, cobertura, densidade de defeitos, lead time, frequência de liberação)",
    isGap: true,
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Módulos de Microsserviços, Serverless e Arquitetura Orientada a Eventos (EDA) com Prof.ª Ana Júlia e Prof. Gabriel Pacheco.",
    f2: "⚠️ SUPRIMENTO DE MÓDULO EM PRODUÇÃO (Clean Architecture, DDD e Métricas Arquiteturais): Assistir imediatamente na CGU - AFFC Desenvolvimento (Cód. 211798) e no TCE SP (Auditor de TI) com Prof.ª Ana Júlia e Prof. Washington Almeida.",
    f3: "TRF 3ª Região - Desenvolvimento (Cód. 212301) e MP ES: Aulas dedicadas de Mensageria com Apache Kafka e RabbitMQ (Prof. Gunter Amorim e Prof. Vitor Kessler).",
    f4: "TJ RJ - Analista de Sistemas (FGV - Cód. 198499): Módulo de DDD, Microsserviços e Métricas de Qualidade de Software."
  },
  {
    id: "DEV_4_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 4 — ALGORITMOS E PROGRAMAÇÃO",
    topic: "4.1 Complexidade de algoritmos (Big-O), Estruturas de dados (listas, pilhas, filas, árvores e tabelas hash) e Algoritmos de busca e ordenação; 4.2 POO e Princípios SOLID",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Módulo de Estruturas de Dados, Busca e Ordenação com Prof. Júlio Leitão.",
    f2: "DPE PB - Desenvolvimento de Sistemas (Cód. 210973) e IFPB / IFCE / PND: Módulos de Complexidade Assintótica (Big-O), POO e Princípios SOLID com Prof. Rogério Araújo.",
    f3: "MPU - Desenvolvimento de Sistemas (FGV - Cód. 210869) / DATAPREV Perfil 3 (Cód. 207803).",
    f4: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Estruturas de Dados, Concorrência e Orientação a Objetos."
  },
  {
    id: "DEV_4_3",
    cat: "DEV",
    catTitle: "DOMÍNIO 4 — ALGORITMOS E PROGRAMAÇÃO",
    topic: "4.3 Java: Collections, Streams e recursos modernos (lambdas, records, sealed classes, pattern matching, switch expressions e virtual threads); Frameworks Java EE/Jakarta EE, Spring Framework, Spring Boot e Hibernate/JPA",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091) e DATAPREV - Perfil 3 (FGV - Cód. 207803): Módulos completos de Java, Jakarta EE, Spring Framework, Spring Boot e Hibernate/JPA com Prof. Rogério Araújo e Prof. Gunter Amorim.",
    f2: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Tópicos 1.5, 1.6, 1.8 e 3 (Java moderno, Virtual Threads, Records, Spring Boot, Spring Security, Spring Data JPA e Spring Batch).",
    f3: "TRF 3ª Região - Desenvolvimento de Sistemas (Cód. 212301) / TRT 4ª Região: Módulos de Java e Ecossistema Spring com Prof. Gunter Amorim.",
    f4: "MPU - Desenvolvimento de Sistemas (FGV - Cód. 210869): Videoaulas e PDFs de Java e Persistência JPA."
  },
  {
    id: "DEV_4_4",
    cat: "DEV",
    catTitle: "DOMÍNIO 4 — ALGORITMOS E PROGRAMAÇÃO",
    topic: "4.4 JavaScript/TypeScript e Node.js; Frameworks frontend: Angular e React; 4.5 Python: sintaxe, estruturas básicas e desenvolvimento web (FastAPI e Django)",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Módulos de JavaScript/TypeScript e Node.js (Prof. Júlio Leitão), React/Angular (Prof.ª Ana Júlia) e Python/Django/FastAPI (Prof. Gunter Amorim e Prof. Rogério Araújo).",
    f2: "DATAPREV - Perfil 3: Desenvolvimento de Software (FGV - Cód. 207803): Módulos completos de Frontend (Angular/React), Node.js e Python no estilo FGV.",
    f3: "SEPLAN AP - Analista de TI / MP ES - Analista de Sistemas: Aulas de Desenvolvimento Web com Python (FastAPI e Django) com Prof. Gunter Amorim.",
    f4: "TRT 4ª Região / IFPB: Módulos de TypeScript, Angular e React com Prof.ª Ana Júlia e Prof. Júlio Leitão."
  },
  {
    id: "DEV_4_6",
    cat: "DEV",
    catTitle: "DOMÍNIO 4 — ALGORITMOS E PROGRAMAÇÃO",
    topic: "4.6 Dart (sintaxe, tipos, estruturas de controle, erros e programação assíncrona) e Flutter ('tudo é um widget', Stateless/Stateful e ciclo de vida; gerenciamento de estado Provider, BLoC, Riverpod e Cubit; Material Design e Cupertino; navegação e rotas nomeadas)",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091): Módulo de Dart e Flutter com Prof. Júlio Leitão e Prof. Vitor Kessler.",
    f2: "DATAPREV - Perfil 3: Desenvolvimento de Software (FGV - Cód. 207803): Módulo de Desenvolvimento Multiplataforma (Dart e Flutter: Widgets, Estado e Rotas).",
    f3: "CRO SP - Analista de Desenvolvimento de Sistemas de Informação (Cód. 403) / TCE MA: Aulas de Desenvolvimento Mobile Multiplataforma com Prof. Vitor Kessler e Prof. Júlio Leitão.",
    f4: "MPU - Desenvolvimento de Sistemas (FGV - Cód. 210869) / DPE PB (Cód. 210973): PDFs e videoaulas de Dart e Flutter."
  },
  {
    id: "DEV_5_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 5 — DESENVOLVIMENTO MOBILE",
    topic: "5.1 Ciclo de vida Android e iOS; 5.2 Persistência local (SQLite, Room, Hive/Isar, SharedPreferences/NSUserDefaults); 5.3 Segurança mobile (credenciais, SSL Pinning, engenharia reversa, TLS/SSL e dados em repouso/trânsito); 5.4 Consumo de APIs RESTful (JSON) e Notificações Push (Firebase Cloud Messaging)",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091): Disciplina Desenvolvimento Mobile - Tópico 1.",
    f2: "DATAPREV - Perfil 3: Desenvolvimento de Software (FGV - Cód. 207803): Módulo Desenvolvimento para dispositivos móveis (Android e iOS), Persistência, TLS/SSL e Consumo de APIs.",
    f3: "TCE MA - Analista de TI e IBC - Analista de TI: Módulo Desenvolvimento de Aplicações Móveis - Android [32m] e Kotlin (12+ aulas) com Prof. Júlio Leitão + Persistência SQLite com Prof. Fabrício Melo.",
    f4: "CRO SP (Cód. 403) / DPE PB (Cód. 210973) / CGU (Cód. 211798): Módulos de Web Services REST/JSON, Criptografia em trânsito/repouso (TLS/SSL Pinning) e Push Notifications."
  },
  {
    id: "DEV_6_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 6 — BANCO DE DADOS E PERSISTÊNCIA",
    topic: "6.1 Modelo relacional e álgebra relacional; 6.2 Normalização (1FN, 2FN e 3FN); 6.3 SQL ANSI (DML, DDL, DCL, TCL, subconsultas, GROUP BY/HAVING, views, triggers e stored procedures); 6.5 SGBDs (PostgreSQL, Oracle, MySQL/MariaDB e SQL Server); 6.6 NoSQL (chave-valor, MongoDB, colunares, grafos e vetoriais)",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Módulo completo de Banco Relacional, Normalização I e II, SQL I a V, PostgreSQL e Oracle com Prof. Washington Almeida + Módulo NoSQL (Chave-Valor/Redis, Colunares, Grafos e Aula 7 - MongoDB) com Prof. Vitor Kessler.",
    f2: "TJPB Banco de Dados (Pós-Edital - FGV) / MP SE / CIDASC: Módulos completos de Oracle 19c, SQL Server, PostgreSQL e MySQL com Prof. Washington Almeida e Prof. Paulo Sérgio.",
    f3: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Tópico 2 (Consultas SQL avançadas, CTEs, triggers, procedures e persistência poliglota).",
    f4: "Curso Isolado: ISS Manaus - Banco de Dados e Linguagem SQL — Prof. Washington Almeida (ou aulas de BD do Prof. Thiago Cavalcanti)."
  },
  {
    id: "DEV_6_4",
    cat: "DEV",
    catTitle: "DOMÍNIO 6 — BANCO DE DADOS E PERSISTÊNCIA",
    topic: "⚠️ 6.4 Otimização de consultas (Query Tuning: planos de execução, indexação, estatísticas e particionamento) e ⚠️ 6.7 Busca vetorial (embeddings, similaridade e índice vetorial)",
    isGap: true,
    f1: "⚠️ SUPRIMENTO DE LACUNA (Query Tuning não é ministrado no 212091!): Assistir em TJPB Banco de Dados e TJPB Infraestrutura de TI (ambos possuem o tópico explícito de Query Tuning) ou no curso BRDE / MP ES (Otimização de código SQL ANSI / Tuning) com Prof. Washington Almeida.",
    f2: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Disciplina Persistência, Integração e Proteção de Dados, Tópicos 2.3 e 2.4 (Índices, planos de execução e diagnóstico de consultas) + Tópico 4.2 (Representações vetoriais, busca semântica e recuperação de informação).",
    f3: "⚠️ SUPRIMENTO DE LACUNA (Busca Vetorial não é ministrada no 212091!): Assistir em TJPB Inteligência Artificial (Cód. 212093), Tópico 5 (Word embeddings, RAG e Busca vetorial: embeddings, similaridade e índice vetorial).",
    f4: "MP ES - Cientista de Dados e AGSUS - Cargo 15 (IA): Aula 5 - Conceitos e Tecnologias de IA: LLM, Engenharia de Prompt, Embeddings e RAG com Prof. Gunter Amorim."
  },
  {
    id: "DEV_7_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 7 — DEVOPS, INFRAESTRUTURA COMO CÓDIGO E NUVEM",
    topic: "7.1 CI/CD (Jenkins, GitLab CI/CD e GitHub Actions); ⚠️ 7.2 Controle de versão com Git (branches, merge, Gitflow, Trunk-Based) e GitOps; 7.3 Docker e Kubernetes (Pods, Deployments, Services, Ingress, ConfigMaps e Secrets); 7.4 Computação em nuvem (IaaS, PaaS, SaaS)",
    isGap: true,
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Módulo Conteinerização e DevOps com Prof. Vitor Kessler (8 videoaulas prontas de Docker, Compose, Rancher e Kubernetes I e II) + 13 videoaulas de Computação em Nuvem.",
    f2: "⚠️ SUPRIMENTO DE LACUNA (GitOps não é ministrado no 212091!): Assistir em TJPB Infraestrutura de TI e TJPB Segurança da Informação (Cód. 212092), que cobrem integralmente Git, Gitflow, Trunk-Based, GitOps e CI/CD.",
    f3: "DPE PB - Desenvolvimento de Sistemas (Cód. 210973) e DATAPREV Perfil 3 (Cód. 207803): Módulos de Controle de Versão Git, Gitflow, Pull Requests e Pipelines de Automação CI/CD.",
    f4: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Tópico 3.3 (Automação de build, teste e implantação, segregação de ambientes e reversão)."
  },
  {
    id: "DEV_7_5",
    cat: "DEV",
    catTitle: "DOMÍNIO 7 — DEVOPS, INFRAESTRUTURA COMO CÓDIGO E NUVEM",
    topic: "7.5 Infraestrutura como Código (IaC) com Terraform (providers, módulos reutilizáveis e state); 7.6 Observabilidade: monitoramento e alertas (Zabbix, Prometheus e Grafana), gerenciamento de logs (ELK Stack/OpenSearch), tracing distribuído e APM",
    f1: "IFCE - Analista de TI - Infraestrutura e Redes / TRF 3ª Região (Cód. 212300): Tópico Automação e provisionamento de infraestrutura com Ansible e Terraform com Prof. Cleirton Monte.",
    f2: "DPE PB - Analista - Desenvolvimento de Sistemas (Cód. 210973): Módulo Ferramentas de monitoramento e logs: Zabbix, Elasticsearch, Logstash, Kibana (ELK), Grafana, Prometheus e Fluentd; Níveis de serviço e métricas.",
    f3: "SED SC - Analista de Informática e SEPLAN AP: Aula 75 - Prometheus e Grafana [27m45s] com Prof. Edward Melo e módulo de Monitoramento e Logs.",
    f4: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798) e TCU (Cód. 198053): Confiabilidade das aplicações: logs, métricas, rastreamento distribuído (tracing/APM) e Observabilidade."
  },
  {
    id: "DEV_8_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 8 — INTELIGÊNCIA ARTIFICIAL",
    topic: "8.1 PLN: pré-processamento de texto (tokenização, stemming, lematização e stop words); 8.2 Representação de texto (TF-IDF e word embeddings); 8.3 Arquitetura Transformer, LLMs e Engenharia de prompt; 8.4 Integração com APIs de IA (OpenAI, Hugging Face), LangChain e RAG",
    f1: "TJPB Inteligência Artificial (Cód. 212093): Módulos específicos de Processamento de Linguagem Natural (Tokenização, Stemming, Lematização, TF-IDF, Word Embeddings), Arquitetura Transformer, LLMs, LangChain e RAG.",
    f2: "MP ES - Cientista de Dados e AGSUS (Cargo 15): Aula 5 - Conceitos e Tecnologias de IA: LLM, Chatbot, Engenharia de Prompt e RAG com Prof. Gunter Amorim.",
    f3: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798) e Ciência de Dados (Cód. 211795): Tópicos de Modelos de Linguagem, Orquestração de Agentes, Busca Vetorial e RAG.",
    f4: "SEFAZ SC / SEPLAG RJ / DATAPREV: Aulas de Aprendizado de Máquina, Grandes Modelos de Linguagem (LLMs) e IA Generativa com Prof. Vitor Kessler e Prof.ª Patrícia Quintão."
  },
  {
    id: "DEV_9_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 9 — SEGURANÇA DA INFORMAÇÃO E QUALIDADE DE SOFTWARE",
    topic: "9.1 Desenvolvimento seguro, modelagem de ameaças, DevSecOps e OWASP Top 10; 9.2 Criptografia simétrica e assimétrica (AES, RSA e curvas elípticas), PKI, ICP-Brasil e assinatura digital; 9.3 Segurança de APIs, rate limiting, SAML 2.0, OAuth 2.0, OpenID Connect e JWT",
    f1: "DPDF - Cargo 4: Analista Desenvolvimento de Sistemas (Cód. 212295): Aulas recém-gravadas de Desenvolvimento Seguro - OWASP Top 10 com Prof. Cleirton Monte.",
    f2: "TJPB Segurança da Informação (Cód. 212092) e TJPB Desenvolvimento (Cód. 212091): Módulos de Criptografia (AES, RSA, ECC, SHA, ICP-Brasil) e Protocolos de Autenticação e Autorização (SAML 2.0, OAuth 2.0, OpenID Connect e JWT) com Prof. Jósis Alves (Jozias Oliveira).",
    f3: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Módulos de Segurança de Aplicações Web/APIs, Controle de Acesso, OAuth2/OIDC/JWT e Rate Limiting.",
    f4: "TRT 23ª Região / PC AL: Aulas de Criptografia, Certificação Digital ICP-Brasil e Segurança com Prof. Gabriel Pacheco e Prof. Fabrício Melo."
  },
  {
    id: "DEV_9_4",
    cat: "DEV",
    catTitle: "DOMÍNIO 9 — SEGURANÇA DA INFORMAÇÃO E QUALIDADE DE SOFTWARE",
    topic: "9.4 Segurança de aplicações de IA (prompt injection, jailbreak, ataques adversariais, sanitização de saída, vazamento de dados/contexto e retenção zero); 9.5 Tipos de testes, TDD, SAST/DAST/IAST, SonarQube, Contract Testing e Mutation Testing",
    f1: "CGU - AFFC - Desenvolvimento de Sistemas (Cód. 211798): Tópico 4 (Segurança em aplicações com LLMs: proteção contra instruções maliciosas / prompt injection, jailbreak, vazamento de contexto e avaliação funcional) + Testes automatizados.",
    f2: "TJPB Segurança da Informação (Cód. 212092) e TJPB IA (Cód. 212093): Tópico explícito de Segurança de aplicações de inteligência artificial (prompt injection, jailbreak, ataques adversariais e exposição indevida de dados).",
    f3: "DATAPREV - Perfil 3 (FGV - Cód. 207803) e Petrobras Ênfase 6 / UNILAB: Módulos de Testes de Segurança (SAST, DAST e IAST) e Análise Estática de Código com SonarQube.",
    f4: "TJ RJ - Analista de Sistemas (FGV - Cód. 198499): Série Estágio de Teste I a X, TDD e Qualidade de Software com Prof. Washington Almeida."
  },
  {
    id: "DEV_10_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 10 — GOVERNANÇA E REGULAÇÃO DO PODER JUDICIÁRIO",
    topic: "10.1 PDPJ-Br (Res. CNJ 335/2020: microsserviços, marketplace e proteção); 10.2 Interoperabilidade: MNI (Res. CNJ 91/2009) e MInG; 10.3 LGPD (Lei 13.709/2018 e privacidade por padrão); 10.4 Marco Civil da Internet (Lei 12.965/2014); 10.5 Governança algorítmica e Normas do CNJ sobre IA no Judiciário (Res. 615/2025)",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091 - Já Disponível!): Aula Resolução CNJ nº 335/2020 - PDPJ-Br [36m47s] e Interoperabilidade (MNI Res. 91/2009 e MInG) com Prof. Darlan Venturelli.",
    f2: "TRF 3ª Região - Desenvolvimento de Sistemas (Cód. 212301): Módulos de PDPJ-Br, LGPD (Lei 13.709/2018 I a III com Prof. Maurício Franceschini) e Normativos do Judiciário.",
    f3: "Direito Digital para Carreiras Jurídicas / Policiais — Prof.ª Patrícia Quintão e Prof.ª Luciana (Marco Civil da Internet - Lei nº 12.965/2014 e LGPD).",
    f4: "TJPB IA (Cód. 212093), TJPB Segurança (Cód. 212092) e TJ PE: Módulos de Governança Algorítmica (transparência, explicabilidade, auditabilidade e supervisão humana) e Resolução CNJ nº 615/2025."
  },
  {
    id: "DEV_11_1",
    cat: "DEV",
    catTitle: "DOMÍNIO 11 — DESIGN DE INTERFACE (UI) E EXPERIÊNCIA DO USUÁRIO (UX)",
    topic: "11.1 Princípios de UI (clareza, flexibilidade, eficiência, consistência e feedback visual); 11.2 User flows, wireframes, protótipos (baixa, média e alta fidelidade), Design Systems e style guides; 11.3 Design responsivo e adaptativo (mobile-first); 11.4 Acessibilidade: eMAG, WCAG 2.1 e 2.2 (POUR e níveis A, AA, AAA), semântica HTML5, ARIA e leitores de tela",
    f1: "TJPB Desenvolvimento de Sistemas (Cód. 212091) e DATAPREV - Perfil 3 (FGV - Cód. 207803): Módulos de UI/UX, Arquitetura da Informação, Prototipação, Design Systems e Usabilidade.",
    f2: "MP ES - Analista de Sistemas e SEDUC PI: Aula 11 - Usabilidade e Acessibilidade - UX, UI, eMAG e WCAG com Prof. Gunter Amorim.",
    f3: "DPE PB - Desenvolvimento de Sistemas (Cód. 210973): Módulo Desenvolvimento responsivo (mobile-first), usabilidade, UX e padrões de acessibilidade.",
    f4: "CRP SP - Especialista TIC (Aula WCAG e eMAG com Prof. Leandro Martins) + Aulas de Governo Eletrônico/eMAG com Prof. Rogério Araújo."
  }
];
