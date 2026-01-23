import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

type TranslationDictionary = Record<string, string>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = join(__dirname, '..');

const translationsPath = join(srcDir, 'translations.json');
const translations: TranslationDictionary = JSON.parse(readFileSync(translationsPath, 'utf-8'));

console.log(`Loaded ${Object.keys(translations).length} translations from translations.json`);

const etorPath = join(srcDir, 'etor_english.js');
const etorContent = readFileSync(etorPath, 'utf-8');

const startMatch = etorContent.match(/const itemNames = \{/);
if (!startMatch || startMatch.index === undefined) {
  throw new Error('Could not find itemNames object in etor_english.js');
}

const startIndex = startMatch.index;

let braceCount = 0;
let endIndex = -1;
let inString = false;
let escapeNext = false;

for (let i = startIndex; i < etorContent.length; i++) {
  const char = etorContent[i];

  if (escapeNext) {
    escapeNext = false;
    continue;
  }

  if (char === '\\' && inString) {
    escapeNext = true;
    continue;
  }

  if (char === '"' && !escapeNext) {
    inString = !inString;
    continue;
  }

  if (!inString) {
    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      if (braceCount === 0) {
        endIndex = i;
        break;
      }
    }
  }
}

if (endIndex === -1) {
  throw new Error('Could not find end of itemNames object');
}

const objectContent = etorContent.substring(startIndex + 'const itemNames = {'.length, endIndex);

const existingTranslations: TranslationDictionary = {};
const lineRegex = /^\s*(?:\/\/\s*)?"([^"]+)":\s*"([^"]+)"/gm;
let match: RegExpExecArray | null;

while ((match = lineRegex.exec(objectContent)) !== null) {
  existingTranslations[match[1]] = match[2];
}

console.log(`Found ${Object.keys(existingTranslations).length} existing item names in etor_english.js`);

const mergedTranslations: TranslationDictionary = { ...existingTranslations, ...translations };

console.log(`Merged total: ${Object.keys(mergedTranslations).length} translations`);

const sortedKeys = Object.keys(mergedTranslations).sort((a, b) => a.localeCompare(b, 'zh'));

const newObjectContent = sortedKeys.map(key => {
  const value = mergedTranslations[key];
  const escapedValue = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `    "${key}": "${escapedValue}"`;
}).join(',\n');

const newObject = `const itemNames = {\n${newObjectContent}\n}`;

const contentBeforeObject = etorContent.substring(0, startIndex);
const codeAfterObject = etorContent.substring(endIndex + 1);

const newContent = contentBeforeObject + newObject + codeAfterObject;

writeFileSync(etorPath, newContent, 'utf-8');

console.log('Successfully updated etor_english.js');
const newTranslationsCount = Object.keys(translations).length - Object.keys(existingTranslations).filter(k => translations[k]).length;
console.log(`New translations added: ${newTranslationsCount}`);
