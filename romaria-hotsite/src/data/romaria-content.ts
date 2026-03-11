export type ScheduleCategory = "daily" | "missas" | "romarias" | "shows";

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
export const spotifyEmbedUrl = "https://open.spotify.com/embed/track/0Sg8D0MjXo9HGeVais98ei?utm_source=generator";
export const youtubeMemberUrl = "https://www.youtube.com/watch?v=a16EkOwj7UM";
export const googlePlayUrl = "https://play.google.com/store/apps/details?id=br.com.paieterno.app.mobile&pcampaignid=web_share";
export const appStoreUrl = "https://apps.apple.com/br/app/pai-eterno/id6745186850?l=en-GB";
export const countdownStartDate = "2026-04-18T00:00:00-03:00";
export const countdownInitialDays = 100;

export const scheduleCategories = [
  { id: "all", label: "Todas" },
  { id: "daily", label: "Programação Diária" },
  { id: "missas", label: "Missas" },
  { id: "romarias", label: "Romarias" },
  { id: "shows", label: "Show e Cultura" },
] as const;

export const scheduleDays: ScheduleDay[] = [
  { id: "all", label: "Todas", weekDay: "TODAS", month: "DATAS", isoDate: "" },
  { id: "26-06", label: "26", weekDay: "SEX", month: "JUN", isoDate: "2026-06-26" },
  { id: "27-06", label: "27", weekDay: "SÁB", month: "JUN", isoDate: "2026-06-27" },
  { id: "28-06", label: "28", weekDay: "DOM", month: "JUN", isoDate: "2026-06-28" },
  { id: "29-06", label: "29", weekDay: "SEG", month: "JUN", isoDate: "2026-06-29" },
  { id: "30-06", label: "30", weekDay: "TER", month: "JUN", isoDate: "2026-06-30" },
  { id: "01-07", label: "01", weekDay: "QUA", month: "JUL", isoDate: "2026-07-01" },
  { id: "02-07", label: "02", weekDay: "QUI", month: "JUL", isoDate: "2026-07-02" },
  { id: "03-07", label: "03", weekDay: "SEX", month: "JUL", isoDate: "2026-07-03" },
  { id: "04-07", label: "04", weekDay: "SÁB", month: "JUL", isoDate: "2026-07-04" },
  { id: "05-07", label: "05", weekDay: "DOM", month: "JUL", isoDate: "2026-07-05" },
  { id: "06-07", label: "06", weekDay: "SEG", month: "JUL", isoDate: "2026-07-06" },
  { id: "07-07", label: "07", weekDay: "TER", month: "JUL", isoDate: "2026-07-07" },
];

export const fixedScheduleGroups: FixedScheduleGroup[] = [
  {
    id: "fixa-geral",
    title: "Programação diária fixa",
    items: [
      {
        id: "fixa-1",
        time: "5h",
        title: "Alvorada Festiva",
        location: "Praça do Santuário, obras do Novo Santuário e Igreja Matriz",
        details: "Transmissão: Rádio Trindade FM",
        category: "daily",
      },
      {
        id: "fixa-2",
        time: "5h20",
        title: "Procissão da Penitência",
        location: "Da Igreja Matriz à Praça do Santuário Basílica",
        details: "Transmissão: TV Pai Eterno, Rádio Trindade FM e Rádio Difusora Goiânia",
        category: "daily",
      },
      {
        id: "fixa-3",
        time: "6h",
        title: "Missa",
        location: "Praça do Santuário Basílica",
        details: "Transmissão: TV Pai Eterno, Rádio Trindade FM e Rádio Difusora Goiânia",
        category: "missas",
      },
      {
        id: "fixa-4",
        time: "19h30",
        title: "Missa com novena",
        location: "Praça do Santuário Basílica",
        details: "Transmissão: TV Pai Eterno, TV Aparecida, Rede Vale FM e Rádio Difusora Goiânia",
        category: "missas",
      },
      {
        id: "fixa-5",
        time: "7h15",
        title: "Visita ao Santíssimo Sacramento e à Virgem Maria",
        location: "Santuário Basílica",
        details: "Transmissão: TV Pai Eterno",
        category: "daily",
      },
      {
        id: "fixa-6",
        time: "8h",
        title: "Missa com novena",
        location: "Santuário Basílica",
        details: "Transmissão: TV Pai Eterno",
        category: "missas",
      },
      {
        id: "fixa-7",
        time: "10h30",
        title: "Missa",
        location: "Santuário Basílica",
        category: "missas",
      },
      {
        id: "fixa-8",
        time: "14h",
        title: "Visita ao Santíssimo Sacramento e à Virgem Maria",
        location: "Santuário Basílica",
        details: "Transmissão: TV Pai Eterno",
        category: "daily",
      },
      {
        id: "fixa-9",
        time: "15h",
        title: "Missa com novena",
        location: "Santuário Basílica",
        details: "Transmissão: TV Pai Eterno",
        category: "missas",
      },
      {
        id: "fixa-10",
        time: "17h30",
        title: "Missa",
        location: "Santuário Basílica",
        category: "missas",
      },
      {
        id: "fixa-11",
        time: "22h",
        title: "Missa",
        location: "Santuário Basílica",
        category: "missas",
      },
    ],
  },
  {
    id: "fixa-locais",
    title: "Missas da programação diária por local",
    items: [
      { id: "missa-local-1", time: "6h e 19h30", title: "Missas da programação diária", location: "Praça do Santuário Basílica", category: "missas" },
      { id: "missa-local-2", time: "8h, 10h30, 15h, 17h30 e 22h", title: "Missas da programação diária", location: "Santuário Basílica", category: "missas" },
      { id: "missa-local-3", time: "9h, 12h, 15h e 17h", title: "Missas da programação diária", location: "Canteiro de Obras do Novo Santuário", category: "missas" },
      { id: "missa-local-4", time: "7h, 9h, 11h, 14h, 16h30 e 19h", title: "Missas da programação diária", location: "Igreja Matriz", category: "missas" },
      { id: "missa-local-5", time: "9h", title: "Missa", location: "Vila São Cottolengo", category: "missas" },
      { id: "missa-local-6", time: "10h e 16h", title: "Missa", location: "Igreja do Santíssimo Redentor", category: "missas" },
      { id: "missa-local-7", time: "7h", title: "Missa", location: "Carmelo da Santíssima Trindade", category: "missas" },
    ],
  },
  {
    id: "fixa-obras",
    title: "Novo Santuário, Matriz e confissões",
    items: [
      { id: "obra-1", time: "7h às 18h", title: "Visitas guiadas ao canteiro de obras do Novo Santuário do Divino Pai Eterno", location: "Canteiro de Obras do Novo Santuário", category: "daily" },
      { id: "obra-2", time: "8h e 14h", title: "Curso de preparação para batismo", location: "Canteiro de Obras do Novo Santuário", category: "daily" },
      { id: "obra-3", time: "10h e 16h", title: "Batismo - Capela Pai Eterno no cruzeiro da obra", location: "Canteiro de Obras do Novo Santuário", details: "Inscrições: Secretaria do Santuário Basílica ou WhatsApp (62) 98591-4541", category: "daily" },
      { id: "matriz-1", time: "8h15 e 13h", title: "Visita ao Santíssimo Sacramento e à Virgem Maria", location: "Matriz", category: "daily" },
      { id: "matriz-2", time: "21h às 4h", title: "Igreja disponível para grupos paroquiais em peregrinação com padres que desejam celebrar a Eucaristia com o grupo", location: "Matriz", details: "Agendamento: Secretaria paroquial ou WhatsApp (62) 3991-9542", category: "daily" },
      { id: "cottolengo-1", time: "7h às 18h", title: "Visitas", location: "Vila São Cottolengo", category: "daily" },
      { id: "confissoes-1", time: "6h às 21h", title: "Confissões", location: "Subsolo do Santuário Basílica", category: "daily" },
    ],
  },
  {
    id: "fixa-especiais",
    title: "Missas especiais por data",
    items: [
      { id: "especial-26", time: "26/06", title: "10h30 Missa dos Militares; 22h Missa da Romaria da OAB", location: "Programação especial", category: "missas" },
      { id: "especial-27", time: "27/06", title: "0h, 2h e 4h; 10h30 Missa dos Acólitos e Coroinhas; 12h Missa; 17h30 Missa com foliões e congadas; 22h Missa da Juventude", location: "Programação especial", category: "missas" },
      { id: "especial-28", time: "28/06", title: "0h, 2h e 4h; 10h30 Missa para as crianças; 12h Missa; 17h30 Missa da Renovação Carismática e das Mães que Rezam pelos Filhos", location: "Programação especial", category: "missas" },
      { id: "especial-29", time: "29/06", title: "12h Missa; 17h30 Missa das Obras Sociais Redentoristas; 17h30 Missa com carreiros, cavaleiros e muladeiros; 21h30 Missa com a juventude", location: "Programação especial", category: "missas" },
      { id: "especial-03", time: "03/07", title: "0h, 2h, 4h e 12h", location: "Programação especial", category: "missas" },
      { id: "especial-04", time: "04/07", title: "0h, 2h e 4h", location: "Programação especial", category: "missas" },
      { id: "especial-05", time: "05/07", title: "0h, 2h, 4h, 6h, 8h, 10h30, 12h, 13h30 e 15h, além das missas da Matriz, Vila São Cottolengo, Igreja do Santíssimo Redentor e Carmelo", location: "Programação especial", category: "missas" },
      { id: "especial-06", time: "06/07", title: "5h30, 6h55, 10h e 19h no Santuário; 7h, 9h e 19h na Matriz; 9h na Vila; 7h no Carmelo", location: "Programação especial", category: "missas" },
    ],
  },
];

export const dateScheduleEntries: ScheduleEntry[] = [
  { id: "2606-1", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "5h", title: "Alvorada Festiva", location: "Praça do Santuário, obras do Novo Santuário e Igreja Matriz", category: "daily" },
  { id: "2606-2", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "5h20", title: "Procissão da Penitência", location: "Da Igreja Matriz à Praça do Santuário Basílica", category: "daily" },
  { id: "2606-3", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "6h", title: "17ª Romaria dos Militares, Forças Armadas, Polícia e Segurança", location: "Trevo de Goiânia", category: "romarias" },
  { id: "2606-4", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "10h30", title: "Missa dos Militares, das Forças Armadas, Polícia e Segurança", location: "Santuário Basílica", category: "missas" },
  { id: "2606-5", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "17h", title: "4ª Romaria da OAB", location: "Trevo de Goiânia", category: "romarias" },
  { id: "2606-6", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "17h", title: "10ª Romaria da Vila São Cottolengo", location: "Trevo de Goiânia", category: "romarias" },
  { id: "2606-7", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "18h", title: "10ª Romaria da Polícia Civil", location: "Terminal Padre Pelágio", category: "romarias" },
  { id: "2606-8", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "19h30", title: "Participação das Paróquias do Vicariato Nossa Senhora Aparecida da Arquidiocese de Goiânia", location: "Praça do Santuário Basílica", category: "shows" },
  { id: "2606-9", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "22h", title: "Missa da Romaria da OAB", location: "Santuário Basílica", category: "missas" },
  { id: "2606-10", dateId: "26-06", dateLabel: "26/06 - Sexta-feira", time: "23h", title: "Bênção para os policiais da Polícia Civil", location: "Santuário Basílica", category: "daily" },

  { id: "2706-1", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "0h", title: "Missa na madrugada", location: "Santuário Basílica", category: "missas" },
  { id: "2706-2", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "9h", title: "Romaria dos Acólitos e Coroinhas", location: "Concentração no altar central da Praça do Santuário", category: "romarias" },
  { id: "2706-3", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "10h", title: "Procissão da Romaria dos Acólitos e Coroinhas", location: "Saindo do altar central da Praça do Santuário para a Basílica", category: "romarias" },
  { id: "2706-4", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "10h30", title: "Missa da Romaria dos Acólitos e Coroinhas do Regional Centro-Oeste da CNBB", location: "Santuário Basílica", category: "missas" },
  { id: "2706-5", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "16h", title: "Romaria Vocacional", location: "Trevo de Goiânia", category: "romarias" },
  { id: "2706-6", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "16h", title: "Romaria da Juventude", location: "Trevo de Goiânia", category: "romarias" },
  { id: "2706-7", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "17h", title: "7ª Romaria Motociclista", location: "Terminal Padre Pelágio", category: "romarias" },
  { id: "2706-8", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "17h", title: "IV Romaria do Colégio e Faculdade Aphonsiano", location: "Trevo de Goiânia", category: "romarias" },
  { id: "2706-9", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "17h30", title: "Missa com os foliões e congadas", location: "Praça do Santuário", category: "shows" },
  { id: "2706-10", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "18h", title: "Bênção aos motociclistas", location: "Porta Principal do Santuário Basílica", category: "daily" },
  { id: "2706-11", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "19h30", title: "Participação das pastorais do Vicariato para a Evangelização da Arquidiocese de Goiânia", location: "Praça do Santuário Basílica", category: "shows" },
  { id: "2706-12", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "21h30", title: "Acolhida e bênção da Romaria do Colégio e Faculdade Aphonsiano", location: "Basílica", category: "daily" },
  { id: "2706-13", dateId: "27-06", dateLabel: "27/06 - Sábado", time: "22h", title: "Missa da Juventude", location: "Santuário Basílica", category: "missas" },

  { id: "2806-1", dateId: "28-06", dateLabel: "28/06 - Domingo", time: "0h", title: "Missa na madrugada", location: "Santuário Basílica", category: "missas" },
  { id: "2806-2", dateId: "28-06", dateLabel: "28/06 - Domingo", time: "10h30 às 11h45", title: "Missa para as crianças - Romeirinhos do Divino Pai Eterno", location: "Santuário Basílica", category: "missas" },
  { id: "2806-3", dateId: "28-06", dateLabel: "28/06 - Domingo", time: "16h30", title: "5ª Romaria dos Ciclistas", location: "Trevo de Goiânia", category: "romarias" },
  { id: "2806-4", dateId: "28-06", dateLabel: "28/06 - Domingo", time: "17h30", title: "Missa da Romaria da Renovação Carismática e do grupo das Mães que Rezam pelos Filhos", location: "Praça do Santuário", category: "missas" },
  { id: "2806-5", dateId: "28-06", dateLabel: "28/06 - Domingo", time: "18h30", title: "Bênção para os ciclistas", location: "Porta Principal do Santuário", category: "daily" },
  { id: "2806-6", dateId: "28-06", dateLabel: "28/06 - Domingo", time: "22h", title: "Missa", location: "Santuário Basílica", category: "missas" },

  { id: "2906-1", dateId: "29-06", dateLabel: "29/06 - Segunda-feira", time: "7h30", title: "Romaria dos Carros de Boi, Cavaleiros e Muladeiros com bênção", location: "Praça da Matriz", category: "romarias" },
  { id: "2906-2", dateId: "29-06", dateLabel: "29/06 - Segunda-feira", time: "17h30", title: "Missa das Obras Sociais Redentoristas", location: "Santuário Basílica", category: "missas" },
  { id: "2906-3", dateId: "29-06", dateLabel: "29/06 - Segunda-feira", time: "19h30", title: "Participação das Paróquias do Vicariato Nossa Senhora do Perpétuo Socorro", location: "Praça do Santuário Basílica", category: "shows" },
  { id: "2906-4", dateId: "29-06", dateLabel: "29/06 - Segunda-feira", time: "19h30", title: "Participação das Paróquias do Vicariato Nossa Senhora da Piedade", location: "Praça do Santuário Basílica", category: "shows" },
  { id: "2906-5", dateId: "29-06", dateLabel: "29/06 - Segunda-feira", time: "19h30", title: "Participação das Paróquias do Vicariato Nossa Senhora da Abadia", location: "Praça do Santuário Basílica", category: "shows" },
  { id: "2906-6", dateId: "29-06", dateLabel: "29/06 - Segunda-feira", time: "19h30", title: "Participação das Paróquias do Vicariato Nossa Senhora Auxiliadora", location: "Praça do Santuário Basílica", category: "shows" },
  { id: "2906-7", dateId: "29-06", dateLabel: "29/06 - Segunda-feira", time: "21h30", title: "Noite da Copiosa (adoração do Santíssimo)", location: "Programação especial", category: "shows" },
  { id: "2906-8", dateId: "29-06", dateLabel: "29/06 - Segunda-feira", time: "22h", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "3006-1", dateId: "30-06", dateLabel: "30/06 - Terça-feira", time: "6h", title: "Missa", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "3006-2", dateId: "30-06", dateLabel: "30/06 - Terça-feira", time: "8h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "3006-3", dateId: "30-06", dateLabel: "30/06 - Terça-feira", time: "10h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "3006-4", dateId: "30-06", dateLabel: "30/06 - Terça-feira", time: "15h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "3006-5", dateId: "30-06", dateLabel: "30/06 - Terça-feira", time: "17h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "3006-6", dateId: "30-06", dateLabel: "30/06 - Terça-feira", time: "19h30", title: "Missa com novena", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "3006-7", dateId: "30-06", dateLabel: "30/06 - Terça-feira", time: "22h", title: "Missa", location: "Santuário Basílica", category: "missas" },

  { id: "0107-1", dateId: "01-07", dateLabel: "01/07 - Quarta-feira", time: "6h", title: "Missa", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0107-2", dateId: "01-07", dateLabel: "01/07 - Quarta-feira", time: "8h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "0107-3", dateId: "01-07", dateLabel: "01/07 - Quarta-feira", time: "10h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0107-4", dateId: "01-07", dateLabel: "01/07 - Quarta-feira", time: "15h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "0107-5", dateId: "01-07", dateLabel: "01/07 - Quarta-feira", time: "17h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0107-6", dateId: "01-07", dateLabel: "01/07 - Quarta-feira", time: "19h30", title: "Missa com novena", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0107-7", dateId: "01-07", dateLabel: "01/07 - Quarta-feira", time: "22h", title: "Missa", location: "Santuário Basílica", category: "missas" },

  { id: "0207-1", dateId: "02-07", dateLabel: "02/07 - Quinta-feira", time: "6h", title: "Missa", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0207-2", dateId: "02-07", dateLabel: "02/07 - Quinta-feira", time: "8h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "0207-3", dateId: "02-07", dateLabel: "02/07 - Quinta-feira", time: "10h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0207-4", dateId: "02-07", dateLabel: "02/07 - Quinta-feira", time: "15h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "0207-5", dateId: "02-07", dateLabel: "02/07 - Quinta-feira", time: "17h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0207-6", dateId: "02-07", dateLabel: "02/07 - Quinta-feira", time: "19h30", title: "Missa com novena", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0207-7", dateId: "02-07", dateLabel: "02/07 - Quinta-feira", time: "22h", title: "Missa", location: "Santuário Basílica", category: "missas" },

  { id: "0307-1", dateId: "03-07", dateLabel: "03/07 - Sexta-feira", time: "0h", title: "Missa na madrugada", location: "Santuário Basílica", category: "missas" },
  { id: "0307-2", dateId: "03-07", dateLabel: "03/07 - Sexta-feira", time: "8h", title: "Encontro dos carreiros, cavaleiros e muladeiros", location: "Antigo Clube Raio de Sol", category: "romarias" },
  { id: "0307-3", dateId: "03-07", dateLabel: "03/07 - Sexta-feira", time: "17h30", title: "Missa com os carreiros, cavaleiros e muladeiros", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0307-4", dateId: "03-07", dateLabel: "03/07 - Sexta-feira", time: "19h30", title: "Participação das pastorais sociais do Vicariato para a Solidariedade", location: "Praça do Santuário Basílica", category: "shows" },
  { id: "0307-5", dateId: "03-07", dateLabel: "03/07 - Sexta-feira", time: "19h30", title: "Participação dos internos da Vila São Cottolengo", location: "Praça do Santuário Basílica", category: "shows" },
  { id: "0307-6", dateId: "03-07", dateLabel: "03/07 - Sexta-feira", time: "19h30", title: "Participação das pastorais do Vicariato para a Cultura e Educação", location: "Praça do Santuário Basílica", category: "shows" },
  { id: "0307-7", dateId: "03-07", dateLabel: "03/07 - Sexta-feira", time: "21h30", title: "Missa com a juventude e Noite da Copiosa (adoração do Santíssimo)", location: "Igreja do Santíssimo Redentor", category: "shows" },
  { id: "0307-8", dateId: "03-07", dateLabel: "03/07 - Sexta-feira", time: "22h", title: "Missa", location: "Santuário Basílica", category: "missas" },

  { id: "0407-1", dateId: "04-07", dateLabel: "04/07 - Sábado", time: "0h", title: "Missa na madrugada", location: "Santuário Basílica", category: "missas" },
  { id: "0407-2", dateId: "04-07", dateLabel: "04/07 - Sábado", time: "6h", title: "Missa", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0407-3", dateId: "04-07", dateLabel: "04/07 - Sábado", time: "8h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "0407-4", dateId: "04-07", dateLabel: "04/07 - Sábado", time: "10h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0407-5", dateId: "04-07", dateLabel: "04/07 - Sábado", time: "15h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "0407-6", dateId: "04-07", dateLabel: "04/07 - Sábado", time: "17h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0407-7", dateId: "04-07", dateLabel: "04/07 - Sábado", time: "19h30", title: "Missa com novena", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0407-8", dateId: "04-07", dateLabel: "04/07 - Sábado", time: "22h", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0507-1", dateId: "05-07", dateLabel: "05/07 - Domingo | Dia da Festa", time: "0h", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0507-2", dateId: "05-07", dateLabel: "05/07 - Domingo | Dia da Festa", time: "0h", title: "Missa", location: "Matriz", category: "missas" },
  { id: "0507-3", dateId: "05-07", dateLabel: "05/07 - Domingo | Dia da Festa", time: "2h", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0507-4", dateId: "05-07", dateLabel: "05/07 - Domingo | Dia da Festa", time: "3h", title: "Missa", location: "Matriz", category: "missas" },
  { id: "0507-5", dateId: "05-07", dateLabel: "05/07 - Domingo | Dia da Festa", time: "5h30", title: "Missa", location: "Matriz", category: "missas" },
  { id: "0507-6", dateId: "05-07", dateLabel: "05/07 - Domingo | Dia da Festa", time: "6h", title: "Santa Missa", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0507-7", dateId: "05-07", dateLabel: "05/07 - Domingo | Dia da Festa", time: "8h", title: "Missa Solene da Festa", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0507-8", dateId: "05-07", dateLabel: "05/07 - Domingo | Dia da Festa", time: "10h", title: "Batismo", location: "Capela Pai Eterno no cruzeiro da obra", category: "daily" },
  { id: "0507-9", dateId: "05-07", dateLabel: "05/07 - Domingo | Dia da Festa", time: "17h30", title: "Procissão Luminosa e Celebração de Encerramento", location: "Saindo da Matriz até a Praça do Santuário Basílica", category: "shows" },

  { id: "0607-1", dateId: "06-07", dateLabel: "06/07 - Segunda-feira depois da festa", time: "5h", title: "Alvorada Festiva", location: "Santuário e Matriz", category: "daily" },
  { id: "0607-2", dateId: "06-07", dateLabel: "06/07 - Segunda-feira depois da festa", time: "5h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0607-3", dateId: "06-07", dateLabel: "06/07 - Segunda-feira depois da festa", time: "6h55", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0607-4", dateId: "06-07", dateLabel: "06/07 - Segunda-feira depois da festa", time: "7h", title: "Missa", location: "Matriz", category: "missas" },
  { id: "0607-5", dateId: "06-07", dateLabel: "06/07 - Segunda-feira depois da festa", time: "9h", title: "Missa", location: "Matriz", category: "missas" },
  { id: "0607-6", dateId: "06-07", dateLabel: "06/07 - Segunda-feira depois da festa", time: "9h", title: "Missa", location: "Vila São Cottolengo", category: "missas" },
  { id: "0607-7", dateId: "06-07", dateLabel: "06/07 - Segunda-feira depois da festa", time: "10h", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0607-8", dateId: "06-07", dateLabel: "06/07 - Segunda-feira depois da festa", time: "19h", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0607-9", dateId: "06-07", dateLabel: "06/07 - Segunda-feira depois da festa", time: "19h", title: "Missa", location: "Matriz", category: "missas" },

  { id: "0707-1", dateId: "07-07", dateLabel: "07/07 - Terça-feira", time: "6h", title: "Missa", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0707-2", dateId: "07-07", dateLabel: "07/07 - Terça-feira", time: "8h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "0707-3", dateId: "07-07", dateLabel: "07/07 - Terça-feira", time: "10h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0707-4", dateId: "07-07", dateLabel: "07/07 - Terça-feira", time: "15h", title: "Missa com novena", location: "Santuário Basílica", category: "missas" },
  { id: "0707-5", dateId: "07-07", dateLabel: "07/07 - Terça-feira", time: "17h30", title: "Missa", location: "Santuário Basílica", category: "missas" },
  { id: "0707-6", dateId: "07-07", dateLabel: "07/07 - Terça-feira", time: "19h30", title: "Missa com novena", location: "Praça do Santuário Basílica", category: "missas" },
  { id: "0707-7", dateId: "07-07", dateLabel: "07/07 - Terça-feira", time: "22h", title: "Missa", location: "Santuário Basílica", category: "missas" },
];

export const touristPoints: TouristPoint[] = [
  { id: "santuario-basilica", title: "Santuário Basílica", description: "Centro das principais celebrações da Romaria do Divino Pai Eterno.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.461648111969!2d-49.486255774090324!3d-16.660960239884734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e6787466e28d7%3A0x910f778927c75984!2sSantu%C3%A1rio%20Bas%C3%ADlica%20do%20Divino%20Pai%20Eterno!5e1!3m2!1spt-BR!2sbr!4v1773157376050!5m2!1spt-BR!2sbr" },
  { id: "vox-patris", title: "Sino Vox Patris", description: "Monumento que integra o circuito de visitação e devoção em Trindade.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2054.8883971717987!2d-49.47432758431892!3d-16.6573243635697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d0055912c25%3A0x27470c9870951243!2sSINO%20VOX%20PATRIS%20-%20VOZ%20DO%20PAI!5e1!3m2!1spt-BR!2sbr!4v1773157348307!5m2!1spt-BR!2sbr" },
  { id: "novo-santuario", title: "Obra do Novo Santuário", description: "Espaço em construção que já recebe visitas guiadas durante a Romaria.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2054.8883971717987!2d-49.47432758431892!3d-16.6573243635697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d84294f0c29%3A0x8abf11afd934ad02!2sNova%20Bas%C3%ADlica%20do%20Divino%20Pai%20Eterno%20(em%20constru%C3%A7%C3%A3o)!5e1!3m2!1spt-BR!2sbr!4v1773157309246!5m2!1spt-BR!2sbr" },
  { id: "rodovia-romeiros", title: "Rodovia dos Romeiros", description: "Trecho tradicional do caminho de peregrinação até Trindade.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.3035804564344!2d-49.331547001804566!3d-16.66038197263264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef55644435c67%3A0x59d55cb309a864a3!2sIn%C3%ADcio%20da%20Romaria%20de%20Trindade!5e1!3m2!1spt-BR!2sbr!4v1773157516545!5m2!1spt-BR!2sbr" },
  { id: "portal-da-fe", title: "Portal da Fé", description: "Marco de chegada para muitos romeiros que visitam a cidade.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1228.9956771954069!2d-49.48254253353902!3d-16.64686313849528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e67005fbf8747%3A0x17b0cb6af39ebf50!2sPortal%20do%20Divino%20Pai%20Eterno!5e1!3m2!1spt-BR!2sbr!4v1773157441352!5m2!1spt-BR!2sbr" },
  { id: "igreja-matriz", title: "Igreja Matriz do Divino Pai Eterno", description: "Um dos pontos históricos mais importantes da devoção em Trindade.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13511.14253986388!2d-49.48904259412823!3d-16.66467618360733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e67569fee32a1%3A0xdc5d17c511779737!2sIgreja%20Matriz!5e1!3m2!1spt-BR!2sbr!4v1773157405592!5m2!1spt-BR!2sbr" },
  { id: "santissimo-redentor", title: "Igreja do Santíssimo Redentor", description: "Local de celebrações e momentos especiais da programação da Romaria.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.998021441408!2d-49.48483429144824!3d-16.66831154501033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d9f32ab80bb%3A0xd32ce4ab8b8e627a!2sReitoria%20Sant%C3%ADssimo%20Redentor!5e1!3m2!1spt-BR!2sbr!4v1773157567316!5m2!1spt-BR!2sbr" },
  { id: "carmelo", title: "Carmelo da Santíssima Trindade", description: "Espaço contemplativo que integra o roteiro religioso de Trindade.", embedUrl: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1773157597417!5m2!1spt-BR!2sbr!6m8!1m7!1siFo8Z2U57JNja22bTBmzZg!2m2!1d-16.66613419424225!2d-49.4786641876666!3f78.4705189186754!4f0.05369812967909127!5f1.1924812503605782" },
  { id: "capela-cruzeiro", title: "Capela do Cruzeiro", description: "Capela ligada às atividades do novo Santuário e da peregrinação.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9323.874885766434!2d-49.477512360074485!3d-16.657841113163226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d0a3a19fb75%3A0xb8fec621e27c5a07!2sCapela%20do%20Morro%20do%20Cruzeiro!5e0!3m2!1spt-BR!2sbr!4v1773157622684!5m2!1spt-BR!2sbr" },
  { id: "vila-cottolengo", title: "Vila São Cottolengo", description: "Obra social visitada por romeiros e presente na programação oficial.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.3293088931177!2d-49.48386719144848!3d-16.660396544804485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d7fd48b7361%3A0x6b382dfb2c8ea8ff!2sVila%20S%C3%A3o%20Cottolengo!5e0!3m2!1spt-BR!2sbr!4v1773157640727!5m2!1spt-BR!2sbr" },
  { id: "praca-constantino", title: "Praça Constantino Xavier", description: "Praça histórica associada à origem da devoção ao Divino Pai Eterno.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.4263949529713!2d-49.491715299969094!3d-16.655532890178147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d7f168fd4b9%3A0x1de04059d5df0fd7!2sPra%C3%A7a%20Constantino%20Xavier%20-%20St.%20Central%2C%20Trindade%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1773157664543!5m2!1spt-BR!2sbr" },
  { id: "museu-memoria", title: "Museu da Memória de Trindade", description: "Espaço voltado à preservação da memória religiosa e cultural da cidade.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.493229068218!2d-49.49944179144877!3d-16.65218394459105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e6787daa895d1%3A0xffaf7d64b00d236f!2sMuseu%20da%20Mem%C3%B3ria!5e0!3m2!1spt-BR!2sbr!4v1773157686249!5m2!1spt-BR!2sbr" },
  { id: "carreirodromo", title: "Carreiródromo", description: "Espaço ligado às tradições dos carreiros durante a Romaria.", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7644.358521200568!2d-49.499373022290044!3d-16.667910699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d745768cbb5%3A0xb448694c9d75d07d!2sCarreir%C3%B3dromo%20Ada%20Cyra!5e0!3m2!1spt-BR!2sbr!4v1773157763204!5m2!1spt-BR!2sbr" },
];
