import { useSetRecoilState } from 'recoil';
import { selectedLanguageAtom } from '../atom';
import db from 'assets/db/language.json';

export const useSetSelectedLanguage = () => {
  const setSelectedLanguage = useSetRecoilState(selectedLanguageAtom);
  return (selectedLanguage: typeof db.languages[0]) => {
    localStorage.setItem('selectedLanguage', JSON.stringify(selectedLanguage));
    setSelectedLanguage(selectedLanguage);
  };
};