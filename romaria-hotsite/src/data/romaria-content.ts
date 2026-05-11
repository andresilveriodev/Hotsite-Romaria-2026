export type ScheduleCategory = "daily" | "special" | "festa";

export type ScheduleDay = {
  id: string;
  label: string;
  weekDay: string;
  month: string;
  isoDate: string;
};

export type ScheduleEntry = {
  id: string;
  dateId?: string;
  dateLabel?: string;
  date?: string;
  day?: string;
  time: string;
  title: string;
  location: string;
  details?: string;
  category: ScheduleCategory;
};

export type FixedScheduleGroup = {
  id: string;
  title: string;
  items: ScheduleEntry[];
};

export type TouristPoint = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
};

export const donationUrl = "https://doe.paieterno.com.br/";
export const clipeEmbedUrl = "https://www.youtube.com/embed/RRQLWcjyD7M";
export const spotifyEmbedUrl =
  "https://open.spotify.com/embed/track/0Sg8D0MjXo9HGeVais98ei?utm_source=generator";
export const youtubeMemberUrl = "https://www.youtube.com/watch?v=a16EkOwj7UM";
export const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=br.com.paieterno.app.mobile&pcampaignid=web_share";
export const appStoreUrl =
  "https://apps.apple.com/br/app/pai-eterno/id6745186850?l=en-GB";
export const countdownStartDate = "2026-04-18T00:00:00-03:00";
export const countdownTargetDate = "2026-06-26T00:00:00-03:00";
export const countdownInitialDays = 100;

export const scheduleCategories = [
  { id: "daily", label: "PROGRAMAÇÃO DIÁRIA" },
  { id: "special", label: "PROGRAMAÇÃO ESPECIAL" },
  { id: "festa", label: "DIA DA FESTA – 05 DE JULHO" },
] as const;

export const scheduleDays: ScheduleDay[] = [
  {
    id: "26-06",
    label: "26",
    weekDay: "SEX",
    month: "JUN",
    isoDate: "2026-06-26",
  },
  {
    id: "27-06",
    label: "27",
    weekDay: "SÁB",
    month: "JUN",
    isoDate: "2026-06-27",
  },
  {
    id: "28-06",
    label: "28",
    weekDay: "DOM",
    month: "JUN",
    isoDate: "2026-06-28",
  },
  {
    id: "29-06",
    label: "29",
    weekDay: "SEG",
    month: "JUN",
    isoDate: "2026-06-29",
  },
  {
    id: "30-06",
    label: "30",
    weekDay: "TER",
    month: "JUN",
    isoDate: "2026-06-30",
  },
  {
    id: "01-07",
    label: "01",
    weekDay: "QUA",
    month: "JUL",
    isoDate: "2026-07-01",
  },
  {
    id: "02-07",
    label: "02",
    weekDay: "QUI",
    month: "JUL",
    isoDate: "2026-07-02",
  },
  {
    id: "03-07",
    label: "03",
    weekDay: "SEX",
    month: "JUL",
    isoDate: "2026-07-03",
  },
  {
    id: "04-07",
    label: "04",
    weekDay: "SÁB",
    month: "JUL",
    isoDate: "2026-07-04",
  },
  {
    id: "05-07",
    label: "05",
    weekDay: "DOM",
    month: "JUL",
    isoDate: "2026-07-05",
  },
  {
    id: "06-07",
    label: "06",
    weekDay: "SEG",
    month: "JUL",
    isoDate: "2026-07-06",
  },
];

export const allScheduleEntries: ScheduleEntry[] = [
  {
    id: "diaria-1",
    time: "5h",
    title: "Alvorada Festiva",
    location: "Praça do Santuário, obras do Novo Santuário e Igreja Matriz",
    details: "Transmissão: Rádio Trindade FM",
    category: "daily",
  },
  {
    id: "diaria-2",
    time: "5h20",
    title: "Procissão da Penitência",
    location: "Da Igreja Matriz à Praça do Santuário Basílica",
    details: "Transmissão: TV Pai Eterno, Rádio Trindade FM e 95.5 Difusora FM",
    category: "daily",
  },

  // PRAÇA DO SANTUÁRIO BASÍLICA
  {
    id: "praca-santuario-basilica-1",
    time: "6h",
    title: "Missa",
    location: "Praça do Santuário Basílica",
    details: "Transmissão: TV Pai Eterno, Rádio Trindade FM e 95.5 Difusora FM",
    category: "daily",
  },
  {
    id: "praca-santuario-basilica-2",
    time: "19h30",
    title: "Missa com novena",
    location: "Praça do Santuário Basílica",
    details:
      "Transmissão: TV Pai Eterno, TV Aparecida, Rede Vale FM e 95.5 Difusora FM",
    category: "daily",
  },

  // SANTUÁRIO BASÍLICA
  {
    id: "santuario-basilica-1",
    time: "8h e 15h",
    title: "Missas com novena",
    location: "Santuário Basílica",
    details: "Transmissão: TV Pai Eterno",
    category: "daily",
  },
  {
    id: "santuario-basilica-2",
    time: "10h30, 17h30 e 22h",
    title: "Missas",
    location: "Santuário Basílica",
    details: "",
    category: "daily",
  },
  {
    id: "santuario-basilica-3",
    time: "7h15 e 14h",
    title: "Visita ao Santíssimo Sacramento e à Virgem Maria",
    location: "Santuário Basílica",
    details: "Transmissão: TV Pai Eterno",
    category: "daily",
  },

  // CANTEIRO DE OBRAS DO NOVO SANTUÁRIO
  {
    id: "canteiro-obras-1",
    time: "9h, 12h e 16h30",
    title: "Missas",
    location: "Canteiro de obras do Novo Santuário",
    details: "",
    category: "daily",
  },
  {
    id: "canteiro-obras-2",
    time: "18h",
    title: "Toque do sino Vox Patris",
    location: "Canteiro de obras do Novo Santuário",
    details: "",
    category: "daily",
  },
  {
    id: "canteiro-obras-3",
    time: "8h e 10h",
    title: "Curso de preparação e batismo",
    location: "Capela Pai Eterno no cruzeiro da obra",
    details: "8h – Curso de preparação e 10h – batismo",
    category: "daily",
  },
  {
    id: "canteiro-obras-4",
    time: "14h e 16h",
    title: "Curso de preparação e batismo",
    location: "Capela Pai Eterno no cruzeiro da obra",
    details:
      "14h – Curso de preparação e 16h – batismo. Inscrições na secretaria do Santuário Basílica ou pelo WhatsApp (62) 98591-4541",
    category: "daily",
  },
  {
    id: "canteiro-obras-5",
    time: "7h às 18h",
    title:
      "Visitas guiadas ao canteiro de obras do Novo Santuário do Divino Pai Eterno",
    location: "Canteiro de obras do Novo Santuário",
    details:
      "Há condução saindo da Vila São Cottolengo para o canteiro de obras do Novo Santuário e também no Trenzinho da Família de Amor, saindo da estação do trenzinho na praça do Santuário",
    category: "daily",
  },

  // MATRIZ
  {
    id: "matriz-1",
    time: "9h e 14h",
    title: "Missas com novena",
    location: "Matriz",
    details: "",
    category: "daily",
  },
  {
    id: "matriz-2",
    time: "7h, 11h, 16h30 e 19h",
    title: "Missas",
    location: "Matriz",
    details: "",
    category: "daily",
  },
  {
    id: "matriz-3",
    time: "8h15 e 13h",
    title: "Visita ao Santíssimo Sacramento e à Virgem Maria",
    location: "Matriz",
    details: "",
    category: "daily",
  },
  {
    id: "matriz-4",
    time: "21h às 4h",
    title: "Igreja disponível para grupos paroquiais em peregrinação",
    location: "Matriz",
    details:
      "A Igreja estará disponível para grupos paroquiais em peregrinação com os padres que desejam celebrar a eucaristia com o grupo. Agendamento na secretaria paroquial ou pelo WhatsApp (62) 3991-9542",
    category: "daily",
  },

  // VILA SÃO COTTOLENGO
  {
    id: "vila-sao-cottolengo-1",
    time: "9h",
    title: "Missa",
    location: "Vila São Cottolengo",
    details: "Visitas das 7h às 18h",
    category: "daily",
  },

  // IGREJA DO SANTÍSSIMO REDENTOR — PE. PELÁGIO
  {
    id: "santissimo-redentor-1",
    time: "10h",
    title: "Missa com novena",
    location: "Igreja do Santíssimo Redentor — Pe. Pelágio",
    details: "",
    category: "daily",
  },
  {
    id: "santissimo-redentor-2",
    time: "16h",
    title: "Missa",
    location: "Igreja do Santíssimo Redentor — Pe. Pelágio",
    details: "",
    category: "daily",
  },

  // CARMELO DA SANTÍSSIMA TRINDADE
  {
    id: "carmelo-1",
    time: "7h",
    title: "Missa",
    location: "Carmelo da Santíssima Trindade",
    details: "",
    category: "daily",
  },

  // CONFISSÕES TODOS OS DIAS
  {
    id: "confissoes-1",
    time: "6h às 21h",
    title: "Confissões todos os dias",
    location: "Subsolo do Santuário Basílica",
    details: "",
    category: "daily",
  },

  // MISSAS NA MADRUGADA
  {
    id: "madrugada-1",
    time: "0h, 2h e 4h",
    title: "Missas na madrugada",
    location: "Santuário Basílica",
    details: "Dias 27 e 28/06",
    category: "daily",
  },
  {
    id: "madrugada-2",
    time: "0h, 2h e 4h",
    title: "Missas na madrugada",
    location: "Santuário Basílica",
    details: "Dias 03, 04 e 05/07",
    category: "daily",
  },

  // DIA 26/06 – SEXTA-FEIRA
  {
    id: "especial-26-06-1",
    date: "26/06",
    day: "Sexta-feira",
    time: "6h",
    title:
      "Saída da 17ª Romaria dos Militares, Forças Armadas, Polícia e Segurança",
    location: "Trevo de Goiânia",
    details: "",
    category: "special",
  },
  {
    id: "especial-26-06-2",
    date: "26/06",
    day: "Sexta-feira",
    time: "10h30",
    title: "Missa dos Militares, das Forças Armadas, Polícia e Segurança",
    location: "Santuário Basílica",
    details: "Transmissão: TV Pai Eterno",
    category: "special",
  },
  {
    id: "especial-26-06-3",
    date: "26/06",
    day: "Sexta-feira",
    time: "17h",
    title: "4ª Romaria da OAB",
    location: "Trevo de Goiânia",
    details: "",
    category: "special",
  },
  {
    id: "especial-26-06-4",
    date: "26/06",
    day: "Sexta-feira",
    time: "17h",
    title: "10ª Romaria da Vila São Cottolengo",
    location: "Trevo de Goiânia",
    details: "",
    category: "special",
  },
  {
    id: "especial-26-06-5",
    date: "26/06",
    day: "Sexta-feira",
    time: "18h",
    title: "10ª Romaria da Polícia Civil",
    location: "Terminal Padre Pelágio",
    details: "",
    category: "special",
  },
  {
    id: "especial-26-06-6",
    date: "26/06",
    day: "Sexta-feira",
    time: "19h30",
    title:
      "Participação das pastorais sociais do Vicariato para a Solidariedade da Arquidiocese de Goiânia",
    location: "Praça do Santuário Basílica",
    details: "",
    category: "special",
  },
  {
    id: "especial-26-06-7",
    date: "26/06",
    day: "Sexta-feira",
    time: "19h30",
    title: "Participação dos internos da Vila São Cottolengo",
    location: "Praça do Santuário Basílica",
    details: "",
    category: "special",
  },

  // DIA 27/06 – SÁBADO
  {
    id: "especial-27-06-1",
    date: "27/06",
    day: "Sábado",
    time: "9h",
    title: "Romaria Regional dos Acólitos e Coroinhas",
    location: "Altar central da praça do Santuário",
    details:
      "Concentração no altar central da praça do Santuário. Às 10h, terá início a procissão, saindo do altar central da praça do Santuário para a Basílica; e às 10h30, Missa no Santuário Basílica. Transmissão: TV Pai Eterno",
    category: "special",
  },
  {
    id: "especial-27-06-2",
    date: "27/06",
    day: "Sábado",
    time: "12h",
    title: "Missa",
    location: "Santuário Basílica",
    details: "",
    category: "special",
  },
  {
    id: "especial-27-06-3",
    date: "27/06",
    day: "Sábado",
    time: "16h",
    title: "Romaria Vocacional",
    location: "Trevo de Goiânia",
    details: "",
    category: "special",
  },
  {
    id: "especial-27-06-4",
    date: "27/06",
    day: "Sábado",
    time: "16h",
    title: "Romaria da Juventude",
    location: "Trevo de Goiânia",
    details: "",
    category: "special",
  },
  {
    id: "especial-27-06-5",
    date: "27/06",
    day: "Sábado",
    time: "16h30",
    title:
      "Romaria do Grupo São Floriano do Corpo de Bombeiros Militar do Estado de Goiás",
    location: "",
    details: "",
    category: "special",
  },
  {
    id: "especial-27-06-6",
    date: "27/06",
    day: "Sábado",
    time: "17h",
    title: "Saída da 7ª Romaria Motociclista",
    location: "Terminal Padre Pelágio",
    details: "",
    category: "special",
  },
  {
    id: "especial-27-06-7",
    date: "27/06",
    day: "Sábado",
    time: "17h",
    title: "IV Romaria do Colégio e Faculdade Aphonsiano",
    location: "Trevo de Goiânia",
    details: "",
    category: "special",
  },
  {
    id: "especial-27-06-8",
    date: "27/06",
    day: "Sábado",
    time: "17h30",
    title: "Missa com os foliões e congadas",
    location: "Praça do Santuário",
    details: "Transmissão: TV Pai Eterno",
    category: "special",
  },
  {
    id: "especial-27-06-9",
    date: "27/06",
    day: "Sábado",
    time: "19h30",
    title:
      "Participação das pastorais do Vicariato para a Evangelização da Arquidiocese de Goiânia",
    location: "Praça do Santuário Basílica",
    details: "",
    category: "special",
  },
  {
    id: "especial-27-06-10",
    date: "27/06",
    day: "Sábado",
    time: "22h",
    title: "Missa da Juventude",
    location: "Santuário Basílica",
    details: "",
    category: "special",
  },

  // DIA 28/06 – DOMINGO
  {
    id: "especial-28-06-1",
    date: "28/06",
    day: "Domingo",
    time: "5h",
    title: "3ª Romaria Vicentina",
    location: "Trevo de Goiânia",
    details: "",
    category: "special",
  },
  {
    id: "especial-28-06-2",
    date: "28/06",
    day: "Domingo",
    time: "10h30 às 11h45",
    title: "Missa para as crianças — Romeirinhos do Divino Pai Eterno",
    location: "Santuário Basílica",
    details: "Transmissão: TV Pai Eterno",
    category: "special",
  },
  {
    id: "especial-28-06-3",
    date: "28/06",
    day: "Domingo",
    time: "12h",
    title: "Missa",
    location: "Santuário Basílica",
    details: "",
    category: "special",
  },
  {
    id: "especial-28-06-4",
    date: "28/06",
    day: "Domingo",
    time: "16h30",
    title: "5ª Romaria dos Ciclistas",
    location: "Trevo de Goiânia",
    details: "",
    category: "special",
  },
  {
    id: "especial-28-06-5",
    date: "28/06",
    day: "Domingo",
    time: "17h30",
    title:
      "Missa da Romaria da Renovação Carismática e do grupo das Mães que Rezam pelos Filhos",
    location: "Praça do Santuário",
    details: "Transmissão: TV Pai Eterno",
    category: "special",
  },

  // DIA 29/06 – SEGUNDA-FEIRA
  {
    id: "especial-29-06-1",
    date: "29/06",
    day: "Segunda-feira",
    time: "19h30",
    title:
      "Participação das Paróquias do Vicariato Nossa Senhora do Perpétuo Socorro da Arquidiocese de Goiânia",
    location: "Praça do Santuário Basílica",
    details: "",
    category: "special",
  },

  // DIA 30/06 – TERÇA-FEIRA
  {
    id: "especial-30-06-1",
    date: "30/06",
    day: "Terça-feira",
    time: "19h30",
    title:
      "Participação das Paróquias do Vicariato Nossa Senhora da Piedade da Arquidiocese de Goiânia",
    location: "Praça do Santuário Basílica",
    details: "",
    category: "special",
  },

  // DIA 01/07 – QUARTA-FEIRA
  {
    id: "especial-01-07-1",
    date: "01/07",
    day: "Quarta-feira",
    time: "19h30",
    title:
      "Participação das Paróquias do Vicariato Nossa Senhora da Abadia da Arquidiocese de Goiânia",
    location: "Praça do Santuário Basílica",
    details: "",
    category: "special",
  },

  // DIA 02/07 – QUINTA-FEIRA
  {
    id: "especial-02-07-1",
    date: "02/07",
    day: "Quinta-feira",
    time: "7h30",
    title: "Romaria dos Carros de Boi, Cavaleiros e Muladeiros com bênção",
    location: "Praça da Matriz",
    details: "",
    category: "special",
  },
  {
    id: "especial-02-07-2",
    date: "02/07",
    day: "Quinta-feira",
    time: "17h30",
    title: "Missa das Obras Sociais Redentoristas",
    location: "Santuário Basílica",
    details: "",
    category: "special",
  },
  {
    id: "especial-02-07-3",
    date: "02/07",
    day: "Quinta-feira",
    time: "19h30",
    title:
      "Participação das Paróquias do Vicariato Nossa Senhora Auxiliadora da Arquidiocese de Goiânia",
    location: "Praça do Santuário Basílica",
    details: "",
    category: "special",
  },

  // DIA 03/07 – SEXTA-FEIRA
  {
    id: "especial-03-07-1",
    date: "03/07",
    day: "Sexta-feira",
    time: "12h",
    title: "Missa",
    location: "Santuário Basílica",
    details: "Dia dedicado à Vila São Cottolengo",
    category: "special",
  },
  {
    id: "especial-03-07-2",
    date: "03/07",
    day: "Sexta-feira",
    time: "19h30",
    title:
      "Participação das pastorais sociais do Vicariato para a Solidariedade da Arquidiocese de Goiânia",
    location: "Praça do Santuário Basílica",
    details: "Dia dedicado à Vila São Cottolengo",
    category: "special",
  },
  {
    id: "especial-03-07-3",
    date: "03/07",
    day: "Sexta-feira",
    time: "19h30",
    title: "Participação dos internos da Vila São Cottolengo",
    location: "Praça do Santuário Basílica",
    details: "Dia dedicado à Vila São Cottolengo",
    category: "special",
  },

  // DIA 04/07 – SÁBADO
  {
    id: "especial-04-07-1",
    date: "04/07",
    day: "Sábado",
    time: "8h",
    title: "Encontro dos carreiros, cavaleiros e muladeiros",
    location: "Antigo Clube Raio de Sol",
    details: "",
    category: "special",
  },
  {
    id: "especial-04-07-2",
    date: "04/07",
    day: "Sábado",
    time: "12h",
    title: "Missa",
    location: "Santuário Basílica",
    details: "",
    category: "special",
  },
  {
    id: "especial-04-07-3",
    date: "04/07",
    day: "Sábado",
    time: "17h30",
    title: "Missa com os carreiros, cavaleiros e muladeiros",
    location: "Praça do Santuário Basílica",
    details: "Transmissão: TV Pai Eterno",
    category: "special",
  },
  {
    id: "especial-04-07-4",
    date: "04/07",
    day: "Sábado",
    time: "19h30",
    title:
      "Participação das pastorais do Vicariato para a Cultura e Educação da Arquidiocese de Goiânia",
    location: "Praça do Santuário Basílica",
    details: "",
    category: "special",
  },
  {
    id: "especial-04-07-5",
    date: "04/07",
    day: "Sábado",
    time: "21h30",
    title: "Missa com a juventude e Noite da Copiosa",
    location: "Igreja do Santíssimo Redentor",
    details: "Logo em seguida, Noite da Copiosa com adoração do Santíssimo",
    category: "special",
  },

  // DIA DA FESTA – 05 DE JULHO
  {
    id: "festa-05-07-1",
    date: "05/07",
    day: "Dia da Festa",
    time: "5h",
    title: "Alvorada Festiva",
    location: "Praça do Santuário, obras do Novo Santuário e Matriz",
    details: "Transmissão: Rádio Trindade FM",
    category: "special",
  },
  {
    id: "festa-05-07-2",
    date: "05/07",
    day: "Dia da Festa",
    time: "5h20",
    title: "Procissão da Penitência",
    location: "Saindo da Matriz para a praça do Santuário Basílica",
    details: "Transmissão: TV Pai Eterno, Rádio Trindade FM e 95.5 Difusora FM",
    category: "special",
  },
  {
    id: "festa-05-07-3",
    date: "05/07",
    day: "Dia da Festa",
    time: "6h",
    title: "Santa Missa",
    location: "Praça do Santuário Basílica",
    details: "Transmissão: TV Pai Eterno, Rádio Trindade FM e 95.5 Difusora FM",
    category: "special",
  },
  {
    id: "festa-05-07-4",
    date: "05/07",
    day: "Dia da Festa",
    time: "8h",
    title: "Missa Solene da Festa",
    location: "Praça do Santuário Basílica",
    details:
      "Transmissão: TV Pai Eterno, 95.5 Difusora FM, Rede Vale FM e Rádio Maracá",
    category: "special",
  },
  {
    id: "festa-05-07-5",
    date: "05/07",
    day: "Dia da Festa",
    time: "17h30",
    title: "Procissão Luminosa e Celebração de Encerramento",
    location: "Saindo da Matriz até a praça do Santuário Basílica",
    details:
      "Levar velas. Transmissão: TV Pai Eterno, TV Aparecida, 95.5 Difusora FM, Rede Vale FM e Rádio Trindade FM",
    category: "special",
  },

  // MISSAS NESTE DIA
  {
    id: "festa-05-07-6",
    date: "05/07",
    day: "Dia da Festa",
    time: "0h, 2h, 4h, 10h30, 12h, 13h30 e 15h",
    title: "Missas neste dia",
    location: "Santuário Basílica",
    details: "",
    category: "special",
  },
  {
    id: "festa-05-07-7",
    date: "05/07",
    day: "Dia da Festa",
    time: "0h, 3h, 5h30, 7h, 8h30, 10h, 12h, 13h30 e 15h",
    title: "Missas neste dia",
    location: "Matriz",
    details: "",
    category: "special",
  },
  {
    id: "festa-05-07-8",
    date: "05/07",
    day: "Dia da Festa",
    time: "9h",
    title: "Missa",
    location: "Vila São Cottolengo",
    details: "",
    category: "special",
  },
  {
    id: "festa-05-07-9",
    date: "05/07",
    day: "Dia da Festa",
    time: "10h e 14h",
    title: "Missas",
    location: "Igreja do Santíssimo Redentor",
    details: "",
    category: "special",
  },
  {
    id: "festa-05-07-10",
    date: "05/07",
    day: "Dia da Festa",
    time: "7h",
    title: "Missa",
    location: "Carmelo",
    details: "",
    category: "special",
  },
  {
    id: "festa-05-07-11",
    date: "05/07",
    day: "Dia da Festa",
    time: "8h e 10h",
    title: "Curso de preparação e batismo",
    location: "Capela Pai Eterno no cruzeiro da obra",
    details: "8h – Curso de preparação e 10h – batismo",
    category: "special",
  },

  // DIA 06 DE JULHO – SEGUNDA-FEIRA DEPOIS DA FESTA
  {
    id: "pos-festa-06-07-1",
    date: "06/07",
    day: "Segunda-feira depois da Festa",
    time: "5h",
    title: "Alvorada Festiva",
    location: "Santuário e Matriz",
    details: "Dia especial de oração pelos romeiros já falecidos",
    category: "special",
  },
  {
    id: "pos-festa-06-07-2",
    date: "06/07",
    day: "Segunda-feira depois da Festa",
    time: "5h30, 6h55, 10h e 19h",
    title: "Missas",
    location: "Santuário Basílica",
    details:
      "6h55 – Transmissão: TV Pai Eterno e Rádio Trindade FM. 19h – Transmissão: TV Pai Eterno. Dia especial de oração pelos romeiros já falecidos",
    category: "special",
  },
  {
    id: "pos-festa-06-07-3",
    date: "06/07",
    day: "Segunda-feira depois da Festa",
    time: "7h, 9h e 19h",
    title: "Missas",
    location: "Matriz",
    details: "Dia especial de oração pelos romeiros já falecidos",
    category: "special",
  },
  {
    id: "pos-festa-06-07-4",
    date: "06/07",
    day: "Segunda-feira depois da Festa",
    time: "9h",
    title: "Missa",
    location: "Vila São Cottolengo",
    details: "Dia especial de oração pelos romeiros já falecidos",
    category: "special",
  },
  {
    id: "pos-festa-06-07-5",
    date: "06/07",
    day: "Segunda-feira depois da Festa",
    time: "7h",
    title: "Missa",
    location: "Carmelo",
    details: "Dia especial de oração pelos romeiros já falecidos",
    category: "special",
  },

  // DIA DA FESTA – 05 DE JULHO
  {
    id: "festa-05-07-1",
    date: "05/07",
    day: "Dia da Festa",
    time: "5h",
    title: "Alvorada Festiva",
    location: "Praça do Santuário, obras do Novo Santuário e Matriz",
    details: "Transmissão: Rádio Trindade FM",
    category: "festa",
  },
  {
    id: "festa-05-07-2",
    date: "05/07",
    day: "Dia da Festa",
    time: "5h20",
    title: "Procissão da Penitência",
    location: "Saindo da Matriz para a praça do Santuário Basílica",
    details: "Transmissão: TV Pai Eterno, Rádio Trindade FM e 95.5 Difusora FM",
    category: "festa",
  },
  {
    id: "festa-05-07-3",
    date: "05/07",
    day: "Dia da Festa",
    time: "6h",
    title: "Santa Missa",
    location: "Praça do Santuário Basílica",
    details: "Transmissão: TV Pai Eterno, Rádio Trindade FM e 95.5 Difusora FM",
    category: "festa",
  },
  {
    id: "festa-05-07-4",
    date: "05/07",
    day: "Dia da Festa",
    time: "8h",
    title: "Missa Solene da Festa",
    location: "Praça do Santuário Basílica",
    details:
      "Transmissão: TV Pai Eterno, 95.5 Difusora FM, Rede Vale FM e Rádio Maracá",
    category: "festa",
  },
  {
    id: "festa-05-07-5",
    date: "05/07",
    day: "Dia da Festa",
    time: "17h30",
    title: "Procissão Luminosa e Celebração de Encerramento",
    location: "Saindo da Matriz até a praça do Santuário Basílica",
    details:
      "Levar velas. Transmissão: TV Pai Eterno, TV Aparecida, 95.5 Difusora FM, Rede Vale FM e Rádio Trindade FM",
    category: "festa",
  },

  // MISSAS NESTE DIA
  {
    id: "festa-05-07-6",
    date: "05/07",
    day: "Dia da Festa",
    time: "0h, 2h, 4h, 10h30, 12h, 13h30 e 15h",
    title: "Missas neste dia",
    location: "Santuário Basílica",
    details: "",
    category: "festa",
  },
  {
    id: "festa-05-07-7",
    date: "05/07",
    day: "Dia da Festa",
    time: "0h, 3h, 5h30, 7h, 8h30, 10h, 12h, 13h30 e 15h",
    title: "Missas neste dia",
    location: "Matriz",
    details: "",
    category: "festa",
  },
  {
    id: "festa-05-07-8",
    date: "05/07",
    day: "Dia da Festa",
    time: "9h",
    title: "Missa",
    location: "Vila São Cottolengo",
    details: "",
    category: "festa",
  },
  {
    id: "festa-05-07-9",
    date: "05/07",
    day: "Dia da Festa",
    time: "10h e 14h",
    title: "Missas",
    location: "Igreja do Santíssimo Redentor",
    details: "",
    category: "festa",
  },
  {
    id: "festa-05-07-10",
    date: "05/07",
    day: "Dia da Festa",
    time: "7h",
    title: "Missa",
    location: "Carmelo",
    details: "",
    category: "festa",
  },

  // BATISMOS
  {
    id: "festa-05-07-11",
    date: "05/07",
    day: "Dia da Festa",
    time: "8h e 10h",
    title: "Curso de preparação e batismo",
    location: "Capela Pai Eterno no cruzeiro da obra",
    details: "8h – Curso de preparação e 10h – batismo",
    category: "festa",
  },
];

export const touristPoints: TouristPoint[] = [
  {
    id: "santuario-basilica",
    title: "Santuario Basilica",
    description:
      "Centro das principais celebracoes da Romaria do Divino Pai Eterno.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.461648111969!2d-49.486255774090324!3d-16.660960239884734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e6787466e28d7%3A0x910f778927c75984!2sSantu%C3%A1rio%20Bas%C3%ADlica%20do%20Divino%20Pai%20Eterno!5e1!3m2!1spt-BR!2sbr!4v1773157376050!5m2!1spt-BR!2sbr",
  },
  {
    id: "vox-patris",
    title: "Sino Vox Patris",
    description:
      "Monumento que integra o circuito de visitacao e devocao em Trindade.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2054.8883971717987!2d-49.47432758431892!3d-16.6573243635697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d0055912c25%3A0x27470c9870951243!2sSINO%20VOX%20PATRIS%20-%20VOZ%20DO%20PAI!5e1!3m2!1spt-BR!2sbr!4v1773157348307!5m2!1spt-BR!2sbr",
  },
  {
    id: "novo-santuario",
    title: "Obra do Novo Santuario",
    description:
      "Espaco em construcao que ja recebe visitas guiadas durante a Romaria.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2054.8883971717987!2d-49.47432758431892!3d-16.6573243635697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d84294f0c29%3A0x8abf11afd934ad02!2sNova%20Bas%C3%ADlica%20do%20Divino%20Pai%20Eterno%20(em%20constru%C3%A7%C3%A3o)!5e1!3m2!1spt-BR!2sbr!4v1773157309246!5m2!1spt-BR!2sbr",
  },
  {
    id: "rodovia-romeiros",
    title: "Rodovia dos Romeiros",
    description: "Trecho tradicional do caminho de peregrinacao ate Trindade.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.3035804564344!2d-49.331547001804566!3d-16.66038197263264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef55644435c67%3A0x59d55cb309a864a3!2sIn%C3%ADcio%20da%20Romaria%20de%20Trindade!5e1!3m2!1spt-BR!2sbr!4v1773157516545!5m2!1spt-BR!2sbr",
  },
  {
    id: "portal-da-fe",
    title: "Portal da Fe",
    description: "Marco de chegada para muitos romeiros que visitam a cidade.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1228.9956771954069!2d-49.48254253353902!3d-16.64686313849528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e67005fbf8747%3A0x17b0cb6af39ebf50!2sPortal%20do%20Divino%20Pai%20Eterno!5e1!3m2!1spt-BR!2sbr!4v1773157441352!5m2!1spt-BR!2sbr",
  },
  {
    id: "igreja-matriz",
    title: "Igreja Matriz do Divino Pai Eterno",
    description:
      "Um dos pontos historicos mais importantes da devocao em Trindade.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13511.14253986388!2d-49.48904259412823!3d-16.66467618360733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e67569fee32a1%3A0xdc5d17c511779737!2sIgreja%20Matriz!5e1!3m2!1spt-BR!2sbr!4v1773157405592!5m2!1spt-BR!2sbr",
  },
  {
    id: "santissimo-redentor",
    title: "Igreja do Santissimo Redentor",
    description:
      "Local de celebracoes e momentos especiais da programacao da Romaria.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.998021441408!2d-49.48483429144824!3d-16.66831154501033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d9f32ab80bb%3A0xd32ce4ab8b8e627a!2sReitoria%20Sant%C3%ADssimo%20Redentor!5e1!3m2!1spt-BR!2sbr!4v1773157567316!5m2!1spt-BR!2sbr",
  },
  {
    id: "carmelo",
    title: "Carmelo da Santissima Trindade",
    description:
      "Espaco contemplativo que integra o roteiro religioso de Trindade.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1773157597417!5m2!1spt-BR!2sbr!6m8!1m7!1siFo8Z2U57JNja22bTBmzZg!2m2!1d-16.66613419424225!2d-49.4786641876666!3f78.4705189186754!4f0.05369812967909127!5f1.1924812503605782",
  },
  {
    id: "capela-cruzeiro",
    title: "Capela do Cruzeiro",
    description:
      "Capela ligada as atividades do novo Santuario e da peregrinacao.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9323.874885766434!2d-49.477512360074485!3d-16.657841113163226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d0a3a19fb75%3A0xb8fec621e27c5a07!2sCapela%20do%20Morro%20do%20Cruzeiro!5e0!3m2!1spt-BR!2sbr!4v1773157622684!5m2!1spt-BR!2sbr",
  },
  {
    id: "vila-cottolengo",
    title: "Vila Sao Cottolengo",
    description:
      "Obra social visitada por romeiros e presente na programacao oficial.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.3293088931177!2d-49.48386719144848!3d-16.660396544804485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d7fd48b7361%3A0x6b382dfb2c8ea8ff!2sVila%20S%C3%A3o%20Cottolengo!5e0!3m2!1spt-BR!2sbr!4v1773157640727!5m2!1spt-BR!2sbr",
  },
  {
    id: "praca-constantino",
    title: "Praca Constantino Xavier",
    description:
      "Praca historica associada a origem da devocao ao Divino Pai Eterno.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.4263949529713!2d-49.491715299969094!3d-16.655532890178147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d7f168fd4b9%3A0x1de04059d5df0fd7!2sPra%C3%A7a%20Constantino%20Xavier%20-%20St.%20Central%2C%20Trindade%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1773157664543!5m2!1spt-BR!2sbr",
  },
  {
    id: "museu-memoria",
    title: "Museu da Memoria de Trindade",
    description:
      "Espaco voltado a preservacao da memoria religiosa e cultural da cidade.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.493229068218!2d-49.49944179144877!3d-16.65218394459105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e6787daa895d1%3A0xffaf7d64b00d236f!2sMuseu%20da%20Mem%C3%B3ria!5e0!3m2!1spt-BR!2sbr!4v1773157686249!5m2!1spt-BR!2sbr",
  },
  {
    id: "carreirodromo",
    title: "Carreirodromo",
    description: "Espaco ligado as tradicoes dos carreiros durante a Romaria.",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7644.358521200568!2d-49.499373022290044!3d-16.667910699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d745768cbb5%3A0xb448694c9d75d07d!2sCarreir%C3%B3dromo%20Ada%20Cyra!5e0!3m2!1spt-BR!2sbr!4v1773157763204!5m2!1spt-BR!2sbr",
  },
];
