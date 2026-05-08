const fs = require('fs');

const contentFile = 'c:/Users/ilumi/Documents/Playground/romaria-hotsite/src/data/romaria-content.ts';
const mdFile = 'c:/Users/ilumi/Documents/Playground/romaria-hotsite/src/data/Programcao.md';

let tsContent = fs.readFileSync(contentFile, 'utf8');
let mdContent = fs.readFileSync(mdFile, 'utf8');

// Fix the missing brace in Programcao.md
mdContent = mdContent.replace('    id: "especial-26-06-1",', '  {\n    id: "especial-26-06-1",');

// Remove headings
let arrayBody = mdContent
  .replace(/PROGRAMAÇÃO DIÁRIA/g, '')
  .replace(/PROGRAMAÇÃO ESPECIAL/g, '')
  .replace(/DIA DA FESTA – 05 DE JULHO/g, '')
  .trim();

let arrayStr = `[${arrayBody}]`;

// Evaluate the string into a JS array
let entries = [];
try {
  entries = eval(arrayStr);
} catch (e) {
  console.error("Eval failed:", e);
}

// Filter out the specific items
entries = entries.filter(entry => {
  if (entry.category === 'festa') {
    if (entry.details === 'Missas neste dia' || entry.details === 'Batismos neste dia') {
      return false;
    }
  }
  return true;
});

// Update ScheduleEntry type
tsContent = tsContent.replace(
  '  dateLabel?: string;\n  time: string;',
  '  dateLabel?: string;\n  date?: string;\n  day?: string;\n  time: string;'
);

// Replace scheduleCategories completely
const oldCategories = `export const scheduleCategories = [
  { id: "all", label: "Todas" },
  { id: "daily", label: "Programação Diária" },
  { id: "missas", label: "Missas" },
  { id: "romarias", label: "Romarias" },
  { id: "shows", label: "Show e Cultura" },
] as const;`;

const newCategories = `export type ScheduleCategory = "daily" | "special" | "festa";\n\nexport const scheduleCategories = [
  { id: "daily", label: "PROGRAMAÇÃO DIÁRIA" },
  { id: "special", label: "PROGRAMAÇÃO ESPECIAL" },
  { id: "festa", label: "DIA DA FESTA – 05 DE JULHO" },
] as const;`;

tsContent = tsContent.replace(oldCategories, newCategories);
tsContent = tsContent.replace('export type ScheduleCategory = typeof scheduleCategories[number]["id"];\n', '');

// Remove "Todas" from scheduleDays
tsContent = tsContent.replace(
  '  { id: "all", label: "Todas", weekDay: "TODAS", month: "DATAS", isoDate: "" },\n',
  ''
);

const startIdx = tsContent.indexOf('export const fixedScheduleGroups');
const endIdx = tsContent.indexOf('export const touristPoints');

const topPart = tsContent.slice(0, startIdx);
const bottomPart = tsContent.slice(endIdx);

const newEntriesStr = `export const allScheduleEntries: ScheduleEntry[] = ${JSON.stringify(entries, null, 2)};\n`;

fs.writeFileSync(contentFile, topPart + '\n' + newEntriesStr + '\n' + bottomPart);
console.log("SUCCESS");
