const fs = require('fs');

const contentFile = 'c:/Users/ilumi/Documents/Playground/romaria-hotsite/src/data/romaria-content.ts';
const mdFile = 'c:/Users/ilumi/Documents/Playground/romaria-hotsite/src/data/Programcao.md';

const mdContent = fs.readFileSync(mdFile, 'utf8');

// The objects in mdContent are just separated by text. Let's extract all the objects.
// Wait, the objects start with "  {" and end with "  }," or "  }"
const tsContent = fs.readFileSync(contentFile, 'utf8');

// Find where fixedScheduleGroups starts
const startIdx = tsContent.indexOf('export const fixedScheduleGroups');

const topPart = tsContent.slice(0, startIdx);

// Remove the text headings and fix the objects to make it a valid JS array body
let arrayBody = mdContent
  .replace(/PROGRAMAÇÃO DIÁRIA/g, '')
  .replace(/PROGRAMAÇÃO ESPECIAL/g, '')
  .replace(/DIA DA FESTA – 05 DE JULHO/g, '')
  .replace(/DIA DA FESTA – 05 DE JULHO/g, '')
  .trim();

// Some objects might not have commas, let's just make it a valid array by wrapping it in []
// Since it's already a list of objects separated by commas, it should just be valid
let newEntries = `export const allScheduleEntries: ScheduleEntry[] = [\n${arrayBody}\n];`;

// Remove potential double commas or syntax errors if the last element had no comma
// Actually, it's safer to just write it as raw string and let eslint/typescript complain if it's invalid,
// but it looks like valid JS syntax since the user just pasted valid JS objects.

fs.writeFileSync(contentFile, topPart + '\n' + newEntries + '\n');
