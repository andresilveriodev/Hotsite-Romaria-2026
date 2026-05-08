const fs = require('fs');

const contentFile = 'c:/Users/ilumi/Documents/Playground/romaria-hotsite/src/data/romaria-content.ts';
const mdFile = 'c:/Users/ilumi/Documents/Playground/romaria-hotsite/src/data/Programcao.md';

let tsContent = fs.readFileSync(contentFile, 'utf8');
let mdContent = fs.readFileSync(mdFile, 'utf8');

// Use proper line endings split
let tsLines = tsContent.split(/\r?\n/);

// 1. Change ScheduleCategory (line 0, 0-indexed)
tsLines[0] = 'export type ScheduleCategory = "daily" | "special" | "festa";';

// 2. Add date and day to ScheduleEntry (find 'dateLabel?: string;')
for (let i = 0; i < tsLines.length; i++) {
  if (tsLines[i] === '  dateLabel?: string;') {
    tsLines.splice(i + 1, 0, '  date?: string;', '  day?: string;');
    break;
  }
}

// 3. Replace scheduleCategories (find 'export const scheduleCategories = [')
for (let i = 0; i < tsLines.length; i++) {
  if (tsLines[i] === 'export const scheduleCategories = [') {
    tsLines[i + 1] = '  { id: "daily", label: "PROGRAMAÇÃO DIÁRIA" },';
    tsLines[i + 2] = '  { id: "special", label: "PROGRAMAÇÃO ESPECIAL" },';
    tsLines[i + 3] = '  { id: "festa", label: "DIA DA FESTA – 05 DE JULHO" },';
    // Remove the remaining old lines (romarias, shows)
    tsLines.splice(i + 4, 2);
    break;
  }
}

// 4. Remove 'Todas' from scheduleDays
for (let i = 0; i < tsLines.length; i++) {
  if (tsLines[i] === 'export const scheduleDays: ScheduleDay[] = [') {
    tsLines.splice(i + 1, 1);
    break;
  }
}

// 5. Generate entries from Programcao.md
mdContent = mdContent.replace('    id: "especial-26-06-1",', '  {\n    id: "especial-26-06-1",');
let arrayBody = mdContent
  .replace(/PROGRAMAÇÃO DIÁRIA/g, '')
  .replace(/PROGRAMAÇÃO ESPECIAL/g, '')
  .replace(/DIA DA FESTA – 05 DE JULHO/g, '')
  .trim();
let entries = [];
try {
  entries = eval(`[${arrayBody}]`);
} catch (e) {
  console.error(e);
}

entries = entries.filter(entry => {
  if (entry.category === 'festa') {
    if (entry.details === 'Missas neste dia' || entry.details === 'Batismos neste dia') {
      return false;
    }
  }
  return true;
});

// 6. Find start of fixedScheduleGroups and end of dateScheduleEntries
let startIdx = tsLines.findIndex(l => l === 'export const fixedScheduleGroups: FixedScheduleGroup[] = [');
let endIdx = tsLines.findIndex(l => l === 'export const touristPoints: TouristPoint[] = [');

// If startIdx and endIdx are found, replace the block between them with allScheduleEntries
if (startIdx !== -1 && endIdx !== -1) {
  const newLines = `export const allScheduleEntries: ScheduleEntry[] = ${JSON.stringify(entries, null, 2)};`.split('\n');
  
  // Splice out the old, splice in the new
  tsLines.splice(startIdx, endIdx - startIdx, ...newLines, '');
} else {
  console.error("COULD NOT FIND START/END IDX!");
}

fs.writeFileSync(contentFile, tsLines.join('\n'));
console.log("SUCCESS");
