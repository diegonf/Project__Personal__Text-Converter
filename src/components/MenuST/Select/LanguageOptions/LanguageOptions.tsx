import styles from './LanguageOptions.module.scss';
import classNames from 'classnames';
import { ILanguage } from '../../assets/menuInterfaces';

interface Props {
  statusMenu: boolean,
  selectLanguage: (language: ILanguage) => void
  languages: ILanguage[],
}

export function LanguageOptions(props: Props) {
  const { statusMenu, selectLanguage, languages } = props;

  return (
    <div 
      className={classNames({
        [styles.languageoptions]: true,
        [styles.languageoptions__statusmenu]: statusMenu
      })}
    >
      {languages.map(language => (
        <div
          role='option'
          key={language.value}
          className={styles.languageoption}
          onClick={() => selectLanguage(language)}
        >
          <img
            src={language.image}
            alt={`${language.label} Language`}
            className={styles.languageoptions__img}
          />
        </div>
      ))}
    </div>
  );
}