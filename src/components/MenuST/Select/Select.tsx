import styles from './Select.module.scss';
import { useEffect, useRef, useState } from 'react';
import { LanguageOptions } from './LanguageOptions/LanguageOptions';
import { ILanguage } from '../assets/menuInterfaces';

interface Props {
  languages: ILanguage[]
}

const Language = (props: Props) => {

  const {languages} = props;

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [statusMenu, setStatusMenu] = useState(false); //True or False for Language Menu to be shown/ not shown
  const ref = useRef<HTMLInputElement>(null);

  const selectLanguage = (language: ILanguage) => {
    setSelectedLanguage(language);
    setStatusMenu(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => { 
      if (ref.current && !ref.current.contains(event.target as Element)) {
        setStatusMenu(false);
      }
    };
    document.addEventListener('click', (event) => handleClickOutside(event));
    return () => {
      document.removeEventListener('click', (event) => handleClickOutside(event));
    };
  }, [ref]);

  return (
    <div className={styles.weblanguage__container} ref={ref}>
      <div 
        role='select' 
        className={styles.weblanguage__selectedlanguage}
        onClick={() => setStatusMenu(!statusMenu)}
      >
        <img
          src={selectedLanguage.image}
          alt={`${selectedLanguage.label} Language`}
          className={styles.weblanguage__img}
        />
      </div>  
      <LanguageOptions
        statusMenu={statusMenu}
        selectLanguage={selectLanguage}
        languages={languages}
      />
    </div>
  );
};

export default Language;