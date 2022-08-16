import { atom } from 'recoil';
import db from 'assets/db/language.json';

const languageDB = db.languages;
export const languagesAtom = atom<typeof languageDB> ({
  key: 'languagesAtom',
  default: languageDB
});

const selectedLanguageLS=localStorage.getItem('selectedLanguage');
let selectedLanguage;
if (selectedLanguageLS) {
  selectedLanguage = JSON.parse(selectedLanguageLS);
} else {
  selectedLanguage = languageDB[0];
  localStorage.setItem('selectedLanguage', JSON.stringify(languageDB[0]));
}
export const selectedLanguageAtom = atom<typeof languageDB[0]> ({
  key: 'selectedLanguageAtom',
  default: selectedLanguage
});

export const menuStatusAtom = atom<boolean> ({
  key: 'menuStatusAtom',
  default: false
});