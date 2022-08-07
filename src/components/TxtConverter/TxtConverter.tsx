import styles from './TxtConverter.module.scss';
import Select, { SingleValue } from 'react-select';
import { useSelectedLanguage } from 'assets/state/hooks/useSelectedLanguage';
import { useState } from 'react'; 

const TxtConverter = () => {
  //language
  const texts = useSelectedLanguage().texts;
  const options = texts.options;

  const [textInput, setTextInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectedOption = (opt: SingleValue<{
    value: string;
    label: string;
  }>) => {
    if(opt) setSelectedOption(opt.value);
  };

  const allTextToLowerCase = () => {
    setTextInput(textInput.toLowerCase());
  };
  const allTextToUpperCase = () => {
    setTextInput(textInput.toUpperCase());
  };
  const firstLetterWordToUpperCase = () => {
    const words = textInput.split(' ');
    const wordsConverted = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    setTextInput(wordsConverted.join(' '));
  };
  const firstLetterSentenceToUpperCase = () => {
    const sentences = textInput.split('.');
    const sentencesConverted = sentences.map(sentence => {
      for (let index = 0; index < sentence.length; index++) {
        if (sentence.charAt(index) != ' ') {
          return sentence.slice(0, index) + sentence.charAt(index).toUpperCase() + sentence.slice(index + 1).toLowerCase();
        }
      }
    });
    setTextInput(sentencesConverted.join('.'));
  };

  const convertText = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    switch (selectedOption) {
    case 'alllower':
      allTextToLowerCase();
      break;
    case 'allup':
      allTextToUpperCase();
      break;
    case 'firstletter-word':
      firstLetterWordToUpperCase();
      break;
    case 'firstletter-sentence':
      firstLetterSentenceToUpperCase();
      break;
    default:
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
          placeholder="Select Option"
          value={options.find(obj => obj.value === selectedOption)}
          options={options}
          onChange={handleSelectedOption}
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