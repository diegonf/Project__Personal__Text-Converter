import styles from './TxtConverter.module.scss';
import Select from 'react-select';

const TxtConverter = () => {

  const options = [
    {value: 'allup', label: 'ALL LETTERS IN UPPERCASE'},
    {value: 'firstletter-word', label: 'First Letter Of Each Word In Uppercase'},
    {value: 'fistletter-sentence', label: 'First letter of each sentence. Uppercase.'},
    {value: 'alllower', label: 'all letters in lowercase'}
  ];

  return (
    <section className={styles.converter__container}>
      <h1 className={styles.converter__title}>Text Converter - Uppercase/ Lowercase</h1>
      <form className={styles.converter__form}>
        <textarea 
          className={styles.converter__textarea}
          name="converterarea" 
          cols={100}
          rows={20}
          id="converterarea" 
          placeholder="Insert your text here!."
        ></textarea>
        <label htmlFor='selectconverter' className={styles.converter__selectlabel}>Select converter option!</label>
        <Select
          id='selectconverter' 
          options={options}
        />
        <button type="submit"  className={styles.converter__submit}>Convert Text</button>
      </form>
    </section>
  );
};

export default TxtConverter;