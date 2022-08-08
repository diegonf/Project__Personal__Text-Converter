import styles from './TxtConverter.module.scss';
import Select, { SingleValue } from 'react-select';
import { useSelectedLanguage } from 'assets/state/hooks/useSelectedLanguage';
import { useState } from 'react'; 
import { firstLetterSentenceToUpperCase, firstLetterWordToUpperCase, keepWordsByUser } from './txtConverterFunctions';

const TxtConverter = () => {
  //language
  const texts = useSelectedLanguage().texts;
  const options = texts.options;

  const [textInput, setTextInput] = useState('');
  let textInputLower = textInput.toLowerCase();
  const [selectedOption, setSelectedOption] = useState('');
  const [numCharIgnore, setNumCharIgnore] = useState(0);
  const [wordsToKeep, setWordsToKeep] = useState('');

  const handleSelectedOption = (opt: SingleValue<{value: string; label: string;}>) => {
    if(opt) setSelectedOption(opt.value);
  };

  const convertText = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    textInputLower = textInput.toLowerCase();

    if (selectedOption == 'alllower') {
      setTextInput(textInput.toLowerCase());
    }
    if (selectedOption == 'allup') {
      setTextInput(textInput.toUpperCase());
    }
    if (selectedOption == 'firstletter-word') {
      const textFirstLetterWordUpdated = firstLetterWordToUpperCase(textInputLower, numCharIgnore);
      const textFirstLetterSentenceUpdated = firstLetterSentenceToUpperCase(textFirstLetterWordUpdated);
      setTextInput(keepWordsByUser(textFirstLetterSentenceUpdated, wordsToKeep));
    }
    if (selectedOption == 'firstletter-sentence') {
      const textFirstLetterSentenceUpdated = firstLetterSentenceToUpperCase(textInputLower);
      setTextInput(keepWordsByUser(textFirstLetterSentenceUpdated, wordsToKeep));
    }
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
          className={styles.converter__selectinput}
          id='selectconverter'
          placeholder="Select Option"
          value={options.find(obj => obj.value === selectedOption)}
          options={options}
          onChange={handleSelectedOption}
        />

        <label htmlFor="numchar" className={styles.converter__numberlabel}>{texts.numbercharignore}</label>
        <input 
          type="number" 
          name='numchar' 
          id='numchar'
          value={numCharIgnore}
          onChange={(event) => setNumCharIgnore(parseInt(event.target.value))}
          className={styles.converter__numberinput}
        />
        <p className={styles.converter__numberlabelp}>{texts.numbercharignore2}</p>

        <label htmlFor="specificchar" className={styles.converter__wordslabel}>{texts.specificcharignore}</label>
        <input 
          type="text" 
          name='specificchar' 
          id='specificchar' 
          placeholder={texts.specificcharplaceholder}
          value={wordsToKeep}
          onChange={(event) => setWordsToKeep(event.target.value)}
          className={styles.converter__wordsinput}
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