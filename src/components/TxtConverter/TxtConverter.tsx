import styles from './TxtConverter.module.scss';
import Select from 'react-select';
import { useSelectedLanguage } from 'assets/state/hooks/useSelectedLanguage';
import { useState } from 'react';

const TxtConverter = () => {

  const [ textInput, setTextInput ] = useState('');
  const texts = useSelectedLanguage().texts;
  const options = texts.options;

  const convertText = () => {
    // convert text - script
  };

  return (
    <section className={styles.converter__container}>
      <h1 className={styles.converter__title}>{texts.tooltitle}</h1>
      <form className={styles.converter__form}>
        <textarea 
          className={styles.converter__textarea}
          name="converterarea" 
          cols={100}
          rows={20}
          id="converterarea" 
          placeholder={texts.placeholder}
          value={textInput}
          onChange={(event) => setTextInput(event.target.value)}
        ></textarea>
        <label htmlFor='selectconverter' className={styles.converter__selectlabel}>{texts.selecttitle}</label>
        <Select
          id='selectconverter' 
          options={options}
        />
        <button 
          type="submit"  
          className={styles.converter__submit}
          onClick={convertText}
        >{texts.textbutton}</button>
      </form>
    </section>
  );
};

export default TxtConverter;