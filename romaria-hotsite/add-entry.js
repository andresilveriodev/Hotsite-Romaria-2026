const fs = require('fs');
const contentFile = 'c:/Users/ilumi/Documents/Playground/romaria-hotsite/src/data/romaria-content.ts';

let tsContent = fs.readFileSync(contentFile, 'utf8');

const targetStr = `"id": "especial-26-06-6",
    "date": "26/06",
    "day": "Sexta-feira",
    "time": "19h30",
    "title": "Participação das Paróquias do Vicariato Nossa Senhora Aparecida da Arquidiocese de Goiânia",
    "location": "Praça do Santuário Basílica",
    "details": "",
    "category": "special"
  },`;

const newEntryStr = `  {
    "id": "especial-26-06-6-extra",
    "date": "26/06",
    "day": "Sexta-feira",
    "time": "19h30",
    "title": "Participação dos internos da Vila São Cottolengo",
    "location": "Praça do Santuário Basílica",
    "details": "",
    "category": "special"
  },`;

if (tsContent.includes(targetStr)) {
  tsContent = tsContent.replace(targetStr, targetStr + '\n' + newEntryStr);
  fs.writeFileSync(contentFile, tsContent, 'utf8');
  console.log('SUCCESS');
} else {
  console.error('Target string not found in file!');
}
