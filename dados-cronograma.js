// =========================================================================
// PARTE 2 DE 4: dados-cronograma.js
// Cronograma TJPB 2026 — Início: 02 de Novembro de 2026
// =========================================================================

export const GRAN_COURSE_URLS = {
  "212091": "https://www.grancursosonline.com.br/cursos/por-concurso/tj-pb-tribunal-de-justica-do-estado-da-paraiba-analista-judiciario-1especialidade-ti-desenvolvimento-de-sistemas-pos-edital",
  "212132": "https://www.grancursosonline.com.br/cursos/por-concurso/tj-pb-tribunal-de-justica-do-estado-da-paraiba-conhecimentos-gerais-para-todos-os-cargos-de-analista-judiciario-em-todas-as-especialidades-de-ti-pos-edital",
  "212088": "https://www.grancursosonline.com.br/cursos/por-concurso/tj-pb-tribunal-de-justica-do-estado-da-paraiba-analista-judiciario-especialidade-ti-gestao-de-governanca-de-ti-pos-edital",
  "212093": "https://www.grancursosonline.com.br/cursos/por-concurso/tj-pb-tribunal-de-justica-do-estado-da-paraiba-analista-judiciario-especialidade-t1i-inteligencia-artificial-pos-edital",
  "212092": "https://www.grancursosonline.com.br/cursos/por-concurso/tj-pb-tribunal-de-justica-do-estado-da-paraiba-analista-judiciario-especialidade-t1i-seguranca-da-informacao-pos-edital",
  "212094": "https://www.grancursosonline.com.br/cursos/por-concurso/tj-pb-tribunal-de-justica-do-estado-da-paraiba-analista-judiciario-especialidade-ti-ciencia-e-analise-de-dados-pos-edital",
  "207803": "https://www.grancursosonline.com.br/cursos/por-concurso/dataprev-empresa-de-tecnologia-e-informacoes-da-previdencia-social-analista-de-tecnologia-da-informacao-1perfil-3-desenvolvimento-de-software-pos-edital",
  "207802": "https://www.grancursosonline.com.br/cursos/por-concurso/dataprev-empresa-de-tecnologia-e-informacoes-da-previdencia-social-analista-de-tecnologia-da-informacao-1perfil-2-arquitetura-engenharia-e-sustentacao-tecnologica-pos-edital",
  "198499": "https://www.grancursosonline.com.br/cursos/por-concurso/tj-rj-tribunal-de-justica-do-estado-do-rio-de-janeiro-conhecimentos-especificos-para-analista-judiciario-grupo-tecnologia-da-informacao-analista-de-sistemas-pos-edital",
  "211798": "https://www.grancursosonline.com.br/cursos/por-concurso/cgu-controladoria-geral-da-uniao-cargo-4-auditor-federal-de-financas-e-controle-affc-especialidade-tecnologia-da-informacao-desenvolvimento-de-sistemas-pos-edital",
  "210973": "https://www.grancursosonline.com.br/cursos/por-concurso/dpe-pb-defensoria-publica-do-estado-da-paraiba-analista-da-defensoria-desenvolvimento-de-sistemas-pos-edital",
  "212301": "https://www.grancursosonline.com.br/cursos/por-concurso/trf-3-regiao-sp-ms-tribunal-regional-federal-da-3-regiao-tecnico-judiciario-area-apoio-especializado-especialidade-desenvolvimento-de-sistemas-de-informacao-pos-edital",
  "212295": "https://www.grancursosonline.com.br/cursos/por-concurso/dpdf-defensoria-publica-do-distrito-federal-cargo-4-analista-de-apoio-a-assistencia-judiciaria-area-informatica-desenvolvimento-de-sistemas-pos-edital",
  "198053": "https://www.grancursosonline.com.br/cursos/por-concurso/tcu-tribunal-de-contas-da-uniao-auditor-federal-de-controle-externo-tecnologia-da-informacao",
  "210948": "https://www.grancursosonline.com.br/cursos/por-materia/carreira-de-ti-para-concursos-1gestao-agil-de-projetos-professor-darlan-venturelli",
  "194432": "https://www.grancursosonline.com.br/cursos/por-materia/raciocinio-logico-para-concursos-professor-marcelo-leite",
  "202271": "https://www.grancursosonline.com.br/cursos/por-materia/raciocinio-logico-para-concursos-1professor-sergio-carvalho",
  "180207": "https://www.grancursosonline.com.br/cursos/por-materia/raciocinio-logico-para-concursos-professor-andre-arruda"
};

export const GRAN_CODES = [
  { code: "212091", name: "TJ PB - Analista Judiciário - TI: Desenvolvimento de Sistemas (Pós-Edital)", focus: "FGV (Curso Base - 398h)", role: "Painel principal: Gramática, RLM base, Nuvem, Docker/K8s, ISO 27001 e SOA." },
  { code: "212088", name: "TJ PB - Analista Judiciário - TI: Gestão de Governança de TI", focus: "FGV (TJPB)", role: "Resoluções CNJ (468/2022, 370/2021), COBIT 2019 e ITIL 4 (Darlan Venturelli)." },
  { code: "212093", name: "TJ PB - Analista Judiciário - TI: Inteligência Artificial", focus: "FGV (TJPB)", role: "Interpretação FGV, Estatística, LLMs, RAG e Busca Vetorial." },
  { code: "212092", name: "TJ PB - Analista Judiciário - TI: Segurança da Informação", focus: "FGV (TJPB)", role: "Redação Oficial (Márcio Wesley), ENSEC-PJ (Res. 396/2021) e GitOps." },
  { code: "207803", name: "DATAPREV - Analista de TI - Perfil 3: Desenvolvimento de Software", focus: "FGV (2026 - 497h)", role: "Java EE/Jakarta, Spring Boot, JPA, Mobile e React/Angular." },
  { code: "198499", name: "TJ RJ - Analista Judiciário - TI: Analista de Sistemas", focus: "FGV (Tribunal)", role: "Engenharia de Software (39 aulas) e Padrões GoF (13 aulas)." },
  { code: "211798", name: "CGU - Auditor Federal (AFFC) - TI: Desenvolvimento de Sistemas", focus: "Alta Complexidade", role: "Clean Architecture, DDD, Query Tuning e RAG." },
  { code: "210973", name: "DPE PB - Analista da Defensoria - Desenvolvimento de Sistemas", focus: "Paraíba", role: "System Design, POO/SOLID, Observabilidade e SAST." },
  { code: "212301", name: "TRF 3ª Região - Técnico Judiciário - Desenvolvimento de Sistemas", focus: "Tribunal", role: "Ecossistema PJe, PDPJ-Br, Kafka, RabbitMQ, Redis e LGPD." }
];

export const WEEKS_DATA = [
  {
    id: "sem1",
    phase: "FASE 1: Alicerce Lógico, Computacional e Algorítmico (Semanas 1 a 3)",
    title: "SEMANA 1 (02/11 a 08/11/2026) — Arq. Computadores, SO, Estruturas de Dados e Big-O",
    dependency: "Entender hierarquia de memória, processos/threads e alocação de dados é o pré-requisito para complexidade de algoritmos e POO.",
    codes: "212091, 212092, 198499",
    days: [
      { id: "s1d1", day: "Seg 02/11", b1Target: "PORT_3", b2Target: "FUND_1_1", b1: "Português: Ortografia oficial e acentuação (Cód. 212092 — Claiton Natal).", b2: "Fund. 1.1: Arquitetura de computadores e hierarquia de memória (Cód. 198499 — Maurício Franceschini)." },
      { id: "s1d2", day: "Ter 03/11", b1Target: "RLM_1", b2Target: "FUND_1_2", b1: "RLM: Conjuntos numéricos e operações (Cód. 212091 — Wagner Aguiar).", b2: "Fund. 1.2: Sistemas Operacionais: Kernel, processos, threads e memória (DPE-PB 210973)." },
      { id: "s1d3", day: "Qua 04/11", b1Target: "PORT_5_1", b2Target: "DEV_4_1", b1: "Português: Classes de palavras I (substantivo, adjetivo, artigo).", b2: "Espec. 4.1: Complexidade Big-O e estruturas lineares (Listas, Pilhas, Filas)." },
      { id: "s1d4", day: "Qui 05/11", b1Target: "RLM_1", b2Target: "DEV_4_1", b1: "RLM: Frações, MMC, MDC e potenciação.", b2: "Espec. 4.1: Estruturas não lineares (Árvores e Tabelas Hash)." },
      { id: "s1d5", day: "Sex 06/11", b1Target: "PORT_5_1", b2Target: "DEV_4_1", b1: "Português: Classes de palavras II (pronomes e verbos).", b2: "Espec. 4.2: Algoritmos de busca e ordenação (Bubble, Quick, Merge Sort)." },
      { id: "s1d6", day: "Sáb 07/11", b1Target: "RLM_1", b2Target: "DEV_4_1", b1: "RLM: Teoria dos conjuntos e diagramas de Venn + 15 questões FGV.", b2: "Revisão da semana e fechamento de fichas de algoritmos." },
      { id: "s1d7", day: "Dom 08/11", b1: "Descanso Sensorial Obrigatório", b2: "Prevenção de Burnout.", isRest: true }
    ]
  },
  {
    id: "sem2",
    title: "SEMANA 2 (09/11 a 15/11/2026) — POO, SOLID, Padrões GoF e Redes TCP/IP",
    dependency: "Com estruturas de dados dominadas, avança-se para POO, SOLID e Padrões GoF.",
    codes: "210973, 198499, 211798",
    days: [
      { id: "s2d1", day: "Seg 09/11", b1Target: "PORT_5_1", b2Target: "DEV_4_1", b1: "Português: Classes de palavras III (advérbios, preposições, conjunções).", b2: "Espec. 4.3: POO (classes, herança, polimorfismo, encapsulamento)." },
      { id: "s2d2", day: "Ter 10/11", b1Target: "RLM_2", b2Target: "DEV_4_1", b1: "RLM: Razões, proporções e regra de três.", b2: "Espec. 4.3: Princípios SOLID e acoplamento." },
      { id: "s2d3", day: "Qua 11/11", b1Target: "PORT_4_2", b2Target: "DEV_3_1", b1: "Português: Tempos e modos verbais.", b2: "Espec. 3.1: Padrões GoF Criacionais e Estruturais (Singleton, Factory, Adapter)." },
      { id: "s2d4", day: "Thu 12/11", b1Target: "RLM_4", b2Target: "DEV_3_1", b1: "RLM: Porcentagem e juros simples/compostos.", b2: "Espec. 3.1: Padrões GoF Comportamentais + Injeção de Dependência (IoC/DI)." },
      { id: "s2d5", day: "Fri 13/11", b1Target: "PORT_5_7", b2Target: "FUND_1_3", b1: "Português: Colocação pronominal.", b2: "Fund. 1.3: Redes TCP/IP, camadas, IPv4/IPv6, DNS, HTTP/HTTPS." },
      { id: "s2d6", day: "Sat 14/11", b1Target: "RLM_5", b2Target: "FUND_1_3", b1: "RLM: Revisão de matemática financeira + Questões FGV.", b2: "Redes Avançadas: VLANs 802.1Q, OSPF e BGP." },
      { id: "s2d7", day: "Sun 15/11", b1: "Descanso Sensorial Obrigatório", b2: "Validação de inscrição e laudo PCD/TEA.", isRest: true }
    ]
  },
  {
    id: "sem3",
    title: "SEMANA 3 (16/11 a 22/11/2026) — Modelagem ER, Normalização, SQL ANSI e SGBDs [Prazo Inscrição: 18/11]",
    dependency: "Domínio relacional e SQL puro antes de Hibernate/JPA.",
    codes: "212091, 211798",
    days: [
      { id: "s3d1", day: "Seg 16/11", b1Target: "PORT_5_1", b2Target: "DEV_6_1", b1: "Português: Sintaxe da oração (termos ligados ao verbo).", b2: "Fund. 1.4 / Espec. 6.1: MER e Modelo Relacional (Washington Almeida)." },
      { id: "s3d2", day: "Ter 17/11", b1Target: "RLM_6", b2Target: "DEV_6_1", b1: "RLM: Equações de 1º e 2º graus e inequações.", b2: "Espec. 6.1/6.2: Álgebra Relacional e Normalização (1FN, 2FN, 3FN)." },
      { id: "s3d3", day: "Qua 18/11", b1Target: "PORT_5_1", b2Target: "DEV_6_1", b1: "⚠️ ÚLTIMO DIA INSCRIÇÃO TJPB (16h)! Português: Termos ligados ao nome.", b2: "Espec. 6.3: SQL ANSI (DDL e DML: SELECT, INSERT, UPDATE, DELETE)." },
      { id: "s3d4", day: "Thu 19/11", b1Target: "RLM_6", b2Target: "DEV_6_1", b1: "RLM: Sistemas de equações lineares.", b2: "Espec. 6.3: SQL Avançado (Joins, Subconsultas, GROUP BY e HAVING)." },
      { id: "s3d5", day: "Fri 20/11", b1Target: "PORT_5_5", b2Target: "DEV_6_1", b1: "Português: Regência verbal e nominal.", b2: "Espec. 6.3: DCL, TCL, Views, Triggers e Stored Procedures." },
      { id: "s3d6", day: "Sat 21/11", b1Target: "RLM_7", b2Target: "DEV_6_1", b1: "RLM: Funções afim e quadrática + Questões FGV.", b2: "SGBDs (PostgreSQL, Oracle) + Treino Discursivo 1 (POO + SQL)." },
      { id: "s3d7", day: "Sun 22/11", b1: "Descanso Sensorial Obrigatório", b2: "Livre.", isRest: true }
    ]
  },
  {
    id: "sem4",
    phase: "FASE 2: Linguagens, Frameworks, Front-End, Mobile e BD Avançado (Semanas 4 a 6)",
    title: "SEMANA 4 (23/11 a 29/11/2026) — Java Moderno, Spring Boot, Hibernate/JPA e Python",
    dependency: "Hibernate/JPA e APIs REST em Spring Boot, Django e FastAPI.",
    codes: "212091, 207803, 211798",
    days: [
      { id: "s4d1", day: "Seg 23/11", b1Target: "RLM_8", b2Target: "DEV_4_3", b1: "RLM: Sequências numéricas, PA e PG.", b2: "Espec. 4.4: Java Collections, Generics, Streams e Lambdas." },
      { id: "s4d2", day: "Ter 24/11", b1Target: "PORT_5_5", b2Target: "DEV_4_3", b1: "Português: Regência.", b2: "Espec. 4.4: Recursos modernos do Java (Records, Pattern Matching, Virtual Threads)." },
      { id: "s4d3", day: "Qua 25/11", b1Target: "RLM_9", b2Target: "DEV_4_3", b1: "RLM: Matrizes e determinantes.", b2: "Espec. 4.5: Hibernate/JPA (Mapeamento, Lazy/Eager, JPQL)." },
      { id: "s4d4", day: "Thu 26/11", b1Target: "PORT_5_5", b2Target: "DEV_4_3", b1: "Português: Concordância.", b2: "Espec. 4.5: Spring Framework, Spring Boot e Spring Security." },
      { id: "s4d5", day: "Fri 27/11", b1Target: "RLM_9", b2Target: "DEV_4_4", b1: "RLM: Revisão de matrizes.", b2: "Espec. 4.7: Python sintaxe básica e estruturas de dados." },
      { id: "s4d6", day: "Sat 28/11", b1Target: "PORT_5_5", b2Target: "DEV_4_4", b1: "Português: Concordância avançada + Questões.", b2: "Espec. 4.7: Desenvolvimento web com Python (Django e FastAPI)." },
      { id: "s4d7", day: "Sun 29/11", b1: "Descanso Sensorial Obrigatório", b2: "Livre.", isRest: true }
    ]
  },
  {
    id: "sem5",
    title: "SEMANA 5 (30/11 a 06/12/2026) — JS/TS, Node.js, Angular, React, UI/UX e Acessibilidade",
    dependency: "Front-end ligado a UI/UX, Design Systems e Acessibilidade (eMAG/WCAG).",
    codes: "212091, 207803, 210973",
    days: [
      { id: "s5d1", day: "Seg 30/11", b1Target: "RLM_11", b2Target: "DEV_4_4", b1: "RLM: Análise combinatória.", b2: "Espec. 4.6: JavaScript (ES6+), TypeScript e Node.js." },
      { id: "s5d2", day: "Ter 01/12", b1Target: "PORT_5_2", b2Target: "DEV_4_4", b1: "Português: Período composto (coordenação e subordinação).", b2: "Espec. 4.6: Frameworks frontend (React e Angular)." },
      { id: "s5d3", day: "Qua 02/12", b1Target: "RLM_10", b2Target: "DEV_11_1", b1: "RLM: Probabilidade.", b2: "Domínio 11: UI/UX, wireframes, protótipos e Design Systems + Treino Discursivo 2." },
      { id: "s5d4", day: "Thu 03/12", b1Target: "PORT_5_2", b2Target: "DEV_11_1", b1: "Português: Orações reduzidas e conectivos.", b2: "Fund. 6.4 / Domínio 11: Acessibilidade digital (eMAG, WCAG 2.1/2.2, ARIA)." },
      { id: "s5d5", day: "Fri 04/12", b1Target: "RLM_12", b2Target: "DEV_11_1", b1: "RLM: Estatística descritiva (média, mediana, moda, desvio padrão).", b2: "Revisão prática de Front-End e Usabilidade." },
      { id: "s5d6", day: "Sat 05/12", b1Target: "PORT_5_4", b2Target: "DEV_4_3", b1: "Português: Pontuação + Bateria FGV.", b2: "Revisão integrada de Web (Java, Python, JS)." },
      { id: "s5d7", day: "Sun 06/12", b1: "Descanso Sensorial Obrigatório", b2: "Livre.", isRest: true }
    ]
  },
  {
    id: "sem6",
    title: "SEMANA 6 (07/12 a 13/12/2026) — Dart, Flutter, Mobile, Query Tuning e NoSQL",
    dependency: "Widgets Flutter, persistência mobile, Query Tuning e NoSQL.",
    codes: "212091, 207803, 211798",
    days: [
      { id: "s6d1", day: "Seg 07/12", b1Target: "RLM_13", b2Target: "DEV_4_6", b1: "RLM: Proposições lógicas e conectivos.", b2: "Espec. 4.8: Dart e Flutter (Widgets, Stateless/Stateful)." },
      { id: "s6d2", day: "Ter 08/12", b1Target: "PORT_4", b2Target: "DEV_4_6", b1: "Português: Coesão textual.", b2: "Espec. 4.8: Flutter gerenciamento de estado (Provider, BLoC, Riverpod)." },
      { id: "s6d3", day: "Wed 09/12", b1Target: "RLM_15", b2Target: "DEV_5_1", b1: "RLM: Tabelas-verdade.", b2: "Domínio 5: Mobile (Ciclo de vida, SQLite/Room, Hive, SSL Pinning, Push FCM)." },
      { id: "s6d4", day: "Thu 10/12", b1Target: "PORT_6", b2Target: "DEV_6_4", b1: "Português: Significação e substituição de palavras.", b2: "⚠️ Espec. 6.4: Otimização de consultas (Query Tuning, índices B-Tree/Bitmap, particionamento)." },
      { id: "s6d5", day: "Fri 11/12", b1Target: "RLM_16", b2Target: "DEV_6_1", b1: "RLM: Equivalências lógicas e De Morgan.", b2: "Espec. 6.6: NoSQL (Redis, MongoDB, colunares, grafos) + Treino Discursivo 3." },
      { id: "s6d6", day: "Sat 12/12", b1Target: "PORT_6", b2Target: "DEV_6_4", b1: "Português: Reescrita de textos + Bateria FGV.", b2: "Revisão geral da Fase 2 (Mobile, Query Tuning, NoSQL)." },
      { id: "s6d7", day: "Sun 13/12", b1: "Descanso Sensorial Obrigatório", b2: "Livre.", isRest: true }
    ]
  },
  {
    id: "sem7",
    phase: "FASE 3: Engenharia de Software, Qualidade/Testes, Arquitetura Avançada e System Design (Semanas 7 e 8)",
    title: "SEMANA 7 (14/12 a 20/12/2026) — Engenharia de Software, Scrum, Kanban, Lean, SAFe, APF e Testes",
    dependency: "Requisitos, APF, metodologias ágeis (Scrum/Kanban/Lean/SAFe) e automação de testes.",
    codes: "198499, 210948, 211798",
    days: [
      { id: "s7d1", day: "Seg 14/12", b1Target: "RLM_17", b2Target: "DEV_1_5", b1: "RLM: Argumentação e dedução.", b2: "Fund. 2 / Espec. 1.1/1.5: SDLC (Cascata, RUP) e Requisitos (RF, RNF, Backlog)." },
      { id: "s7d2", day: "Ter 15/12", b1Target: "PORT_1", b2Target: "DEV_1_1", b1: "Português: Interpretação de textos FGV.", b2: "Fund. 2 / Espec. 1.2: Metodologias Ágeis: Scrum e Kanban." },
      { id: "s7d3", day: "Wed 16/12", b1Target: "RLM_17", b2Target: "DEV_1_3", b1: "RLM: Diagramas lógicos.", b2: "⚠️ Espec. 1.3/1.4: Lean Software Development e SAFe (Agilidade em Escala)." },
      { id: "s7d4", day: "Thu 17/12", b1Target: "PORT_2", b2Target: "DEV_1_5", b1: "Português: Tipos e gêneros textuais.", b2: "Espec. 1.6/1.7: Métricas APF/IFPUG e Estimativas Ágeis (Story Points) + SDD." },
      { id: "s7d5", day: "Fri 18/12", b1Target: "RLM_19", b2Target: "DEV_9_4", b1: "RLM: Resolução de problemas lógicos.", b2: "Fund. 2 / Espec. 9.5: Testes de software (Unitários, TDD, BDD, Contract Testing)." },
      { id: "s7d6", day: "Sat 19/12", b1Target: "PORT_1", b2Target: "DEV_3_4", b1: "Português: Interpretação (FGV em Exercícios).", b2: "Espec. 3.7: Métricas de Qualidade Arquitetural (MTTR, Lead Time)." },
      { id: "s7d7", day: "Sun 20/12", b1: "Descanso Sensorial Obrigatório", b2: "Livre.", isRest: true }
    ]
  },
  {
    id: "sem8",
    title: "SEMANA 8 (21/12 a 27/12/2026) — Clean Architecture, DDD, Microsserviços, EDA e System Design",
    dependency: "Arquitetura de sistemas distribuídos, CAP/PACELC, Redis e resiliência.",
    codes: "212091, 211798, 210973, 198053",
    days: [
      { id: "s8d1", day: "Seg 21/12", b1Target: "RLM_1", b2Target: "DEV_3_4", b1: "RLM: Revisão do Bloco I de RLM (Conjuntos e Proporção).", b2: "⚠️ Espec. 3.6: Clean Architecture e Domain-Driven Design (DDD)." },
      { id: "s8d2", day: "Ter 22/12", b1Target: "PORT_6_5", b2Target: "DEV_3_4", b1: "Português: Redação Oficial (Manual da Presidência).", b2: "Fund. 2.1 / Espec. 3.3/3.4: SOA, Web Services (REST/SOAP) e Microsserviços." },
      { id: "s8d3", day: "Wed 23/12", b1Target: "RLM_6", b2Target: "DEV_2_1", b1: "RLM: Revisão do Bloco II de RLM (Equações e Funções).", b2: "Espec. 3.5 / 2.3: EDA (Kafka e RabbitMQ), gRPC e WebSockets." },
      { id: "s8d4", day: "Thu 24/12", b1: "Descanso Sensorial Obrigatório", b2: "Véspera de Natal.", isRest: true },
      { id: "s8d5", day: "Fri 25/12", b1: "Descanso Sensorial Obrigatório", b2: "Natal.", isRest: true },
      { id: "s8d6", day: "Sat 26/12", b1Target: "RLM_10", b2Target: "DEV_2_4", b1: "RLM: Revisão de Estatística e Probabilidade.", b2: "Domínio 2: System Design (CAP, PACELC, Redis, Sharding, NGINX) + Treino Discursivo 4." },
      { id: "s8d7", day: "Sun 27/12", b1Target: "PORT_4", b2Target: "DEV_2_4", b1: "Português: Coesão e Pontuação.", b2: "Revisão geral da Fase 3 (Arquitetura e System Design)." }
    ]
  },
  {
    id: "sem9",
    phase: "FASE 4: DevOps, Nuvem, Segurança/DevSecOps, IA Generativa e Governança (Semanas 9 a 11)",
    title: "SEMANA 9 (28/12 a 03/01/2027) — Nuvem, Git/GitOps, CI/CD, Docker, K8s, Terraform e Observabilidade",
    dependency: "Versionamento, empacotamento, orquestração, IaC e monitoramento.",
    codes: "212091, 212092, 210973, 212300",
    days: [
      { id: "s9d1", day: "Seg 28/12", b1Target: "RLM_13", b2Target: "FUND_1_4", b1: "RLM: Lógica Proposicional e Conectivos.", b2: "Fund. 1.5 / Espec. 7.4: Computação em Nuvem (AWS, Azure, GCP)." },
      { id: "s9d2", day: "Tue 29/12", b1Target: "PORT_1", b2Target: "DEV_7_1", b1: "Português: Provas comentadas FGV 2026 (Tereza Cavalcanti).", b2: "⚠️ Espec. 7.1/7.2: Git, Gitflow, GitOps + CI/CD (Jenkins, GitLab CI, GitHub Actions)." },
      { id: "s9d3", day: "Wed 30/12", b1Target: "RLM_16", b2Target: "DEV_7_1", b1: "RLM: Equivalências lógicas e Leis de De Morgan.", b2: "Espec. 7.3: Docker e Kubernetes (Pods, Deployments, Services, Ingress) + Treino Discursivo 5." },
      { id: "s9d4", day: "Thu 31/12", b1: "Descanso Sensorial Obrigatório", b2: "Véspera de Ano Novo.", isRest: true },
      { id: "s9d5", day: "Fri 01/01", b1: "Descanso Sensorial Obrigatório", b2: "Ano Novo.", isRest: true },
      { id: "s9d6", day: "Sat 02/01", b1Target: "RLM_17", b2Target: "DEV_7_5", b1: "RLM: Argumentação e problemas lógicos.", b2: "Espec. 7.5: Infraestrutura como Código (IaC) com Terraform e Ansible." },
      { id: "s9d7", day: "Sun 03/01", b1Target: "PORT_1", b2Target: "DEV_7_5", b1: "Português: Simulado FGV TJRJ 2026.", b2: "Espec. 7.6: Observabilidade (Zabbix, Prometheus, Grafana, ELK, SRE)." }
    ]
  },
  {
    id: "sem10",
    title: "SEMANA 10 (04/01 a 10/01/2027) — Segurança, Criptografia, OAuth2/JWT, OWASP Top 10 e ISO 27000",
    dependency: "Criptografia, tokens de acesso, testes de segurança e normas ISO.",
    codes: "212091, 212092, 212295, 211798",
    days: [
      { id: "s10d1", day: "Seg 04/01", b1Target: "RLM_13", b2Target: "DEV_9_1", b1: "RLM: Simulado cronometrado de RLM.", b2: "Fund. 3.1 / Espec. 9.2: Princípios CID, Criptografia (AES, RSA, ECC), PKI, ICP-Brasil." },
      { id: "s10d2", day: "Tue 05/01", b1Target: "PORT_1", b2Target: "FUND_3", b1: "Português: Simulado cronometrado de Português.", b2: "Fund. 3.2/3.3: Gestão de Riscos, DRP, ISO/IEC 27001, 27002 e 27005." },
      { id: "s10d3", day: "Wed 06/01", b1Target: "RLM_16", b2Target: "DEV_9_1", b1: "RLM: Revisão de equivalências e negações.", b2: "Espec. 9.3: Segurança de APIs, SAML 2.0, OAuth 2.0, OIDC, JWT e Rate Limiting." },
      { id: "s10d4", day: "Thu 07/01", b1Target: "PORT_6", b2Target: "DEV_9_1", b1: "Português: Reescrita e equivalência.", b2: "Espec. 9.1: Desenvolvimento Seguro, STRIDE e OWASP Top 10 (Cleirton Monte)." },
      { id: "s10d5", day: "Fri 08/01", b1Target: "RLM_19", b2Target: "DEV_9_4", b1: "RLM: Resolução de problemas lógicos av.", b2: "Espec. 9.5: Testes de segurança (SAST, DAST, IAST) e SonarQube." },
      { id: "s10d6", day: "Sat 09/01", b1Target: "PORT_5_4", b2Target: "DEV_9_1", b1: "Português: Pontuação avançada + Bateria FGV.", b2: "Revisão geral da Semana 10 (Segurança e Criptografia)." },
      { id: "s10d7", day: "Sun 10/01", b1: "Descanso Sensorial Obrigatório", b2: "Livre.", isRest: true }
    ]
  },
  {
    id: "sem11",
    title: "SEMANA 11 (11/01 a 17/01/2027) — BI, Busca Vetorial, LLMs, RAG, COBIT/ITIL e Contratações",
    dependency: "Governança de dados, IA Generativa (RAG/LangChain), COBIT/ITIL e Licitações de TI.",
    codes: "212093, 212094, 211798, 212088",
    days: [
      { id: "s11d1", day: "Seg 11/01", b1Target: "RLM_10", b2Target: "DEV_6_4", b1: "RLM: Prova FGV AMAZUL / TJ-SC.", b2: "Fund. 5.1/5.2 + ⚠️ Espec. 6.7: DAMA-DMBOK, BI, ETL + Busca Vetorial e Embeddings." },
      { id: "s11d2", day: "Tue 12/01", b1Target: "PORT_1", b2Target: "DEV_8_1", b1: "Português: Prova FGV AMAZUL / TJ-SC.", b2: "Fund. 5.3 / Domínio 8: PLN, Transformers, LLMs e Engenharia de Prompt." },
      { id: "s11d3", day: "Wed 13/01", b1Target: "RLM_12", b2Target: "DEV_9_4", b1: "RLM: Estatística e Probabilidade (FGV).", b2: "Espec. 8.4/9.4: LangChain, RAG e Segurança em IA (Prompt Injection, Retenção zero) + Treino Discursivo 6." },
      { id: "s11d4", day: "Thu 14/01", b1Target: "PORT_6", b2Target: "FUND_4", b1: "Português: Coesão e semântica.", b2: "Fund. 4.1: Governança de TI: COBIT 2019 e ITIL 4 (Darlan Venturelli)." },
      { id: "s11d5", day: "Fri 15/01", b1Target: "RLM_11", b2Target: "FUND_4", b1: "RLM: Análise combinatória av.", b2: "Fund. 4.2: Planejamento Estratégico (PDTIC) e Contratações de TIC (Lei 14.133, Res. CNJ 468/2022)." },
      { id: "s11d6", day: "Sat 16/01", b1Target: "PORT_4", b2Target: "DEV_8_1", b1: "Português: Revisão de textos e conectivos.", b2: "Revisão geral da Semana 11 (IA, RAG e Governança)." },
      { id: "s11d7", day: "Sun 17/01", b1: "Descanso Sensorial Obrigatório", b2: "Livre.", isRest: true }
    ]
  },
  {
    id: "sem12",
    phase: "FASE 5: Legislação do Judiciário, Fechamento e Reta Final (Semana 12 + Véspera)",
    title: "SEMANA 12 (18/01 a 24/01/2027) — PJe, PDPJ-Br, Resoluções CNJ, LGPD, PDTI e Prova",
    dependency: "Legislação específica do CNJ, PJe, PDPJ-Br, LGPD e reta final para o dia da prova.",
    codes: "212301, 212091, 212088, 212092",
    days: [
      { id: "s12d1", day: "Seg 18/01", b1Target: "RLM_16", b2Target: "FUND_6", b1: "RLM: Revisão de equivalências lógicas.", b2: "Fund. 6.1-6.3 / Espec. 10.1-10.2: ⚠️ PJe (TRF3 212301), PDPJ-Br (Res. 335/2020) e MNI/MInG." },
      { id: "s12d2", day: "Tue 19/01", b1Target: "PORT_5_5", b2Target: "FUND_7", b1: "Português: Revisão de concordância e regência.", b2: "Fund. 7.1: Normas de TIC no Poder Judiciário (Resoluções CNJ nº 370/2021, 396/2021, 468/2022)." },
      { id: "s12d3", day: "Wed 20/01", b1Target: "RLM_17", b2Target: "FUND_7", b1: "RLM: Revisão de argumentação.", b2: "Fund. 7.2-7.4: MoReq-Jus (Res. 522/2023), ⚠️ RDC-Arq (Arquivologia) e ⚠️ PDF do PDTI 2024–2026 do TJPB." },
      { id: "s12d4", day: "Thu 21/01", b1Target: "PORT_6", b2Target: "DEV_2_4", b1: "Reta Final: Revisão Visual I (Português e RLM).", b2: "Reta Final TI I: GoF, SOLID, Clean Arch, DDD, System Design (CAP, Redis, Circuit Breaker)." },
      { id: "s12d5", day: "Fri 22/01", b1Target: "PORT_6_5", b2Target: "DEV_8_1", b1: "Reta Final: Leitura rápida dos esqueletos das discursivas.", b2: "Reta Final TI II: Flutter, Docker/K8s, Terraform, OWASP, RAG/Busca Vetorial e Resoluções CNJ." },
      { id: "s12d6", day: "Sat 23/01", b1: "DESACELERAÇÃO SENSORIAL OBRIGATÓRIA (Véspera de Prova)", b2: "Separar documento original, comprovante de inscrição, tempo adicional, canetas pretas e lanche[cite: 3].", isRest: true },
      { id: "s12d7", day: "Sun 24/01", b1Target: "PORT_1", b2Target: "DEV_1_1", b1: "🎯 DIA DA PROVA TJPB 2026 (Portões fecham 12h30 | Início 13h00)[cite: 2].", b2: "Estratégia de Prova (com +1h adicional): 1º Rascunho Discursiva → 2º 40 Questões TI → 3º Redação limpa → 4º Português/RLM → 5º Cartão-Resposta[cite: 2, 3]." }
    ]
  }
];
