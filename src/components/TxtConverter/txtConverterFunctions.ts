export const firstLetterWordToUpperCase = (text: string, numCharIgnore: number) => {
  const words = text.split(/([^A-Za-zÀ-ȕ0-9]+)/);

  const wordsConverted = words.map(word => {
    if (word.length <= numCharIgnore) return word; //apply filter by number of chars chosen by user
    if (word.length === 1) return word.charAt(0).toUpperCase(); //Uppercase any 1 word letter

    return word.charAt(0).toUpperCase() + word.slice(1); //Uppercase first letter of any word with 2 or more letters
  });
  return wordsConverted.join(''); 
};

export const firstLetterSentenceToUpperCase = (text: string) => {
  const sentences = text.split(/([^A-Za-zÀ-ȕ0-9 ,#%'"--“”’+*/&$@<>ªº°\\]+)/);
  const sentencesConverted = sentences.map(sentence => {
    for (let index = 0; index < sentence.length; index++) {
      if (sentence.length === 1) {
        return sentence.charAt(0).toUpperCase();
      }
      const regex = new RegExp('[^A-Za-zÀ-ȕ]+');
      const regexTest = regex.test(sentence.charAt(index));
      if (!regexTest) {
        return sentence.slice(0, index) + sentence.charAt(index).toUpperCase() + sentence.slice(index + 1);
      }
    }
    return sentence;
  });
  return sentencesConverted.join('');
};

export const keepWordsByUser = (text: string, wordsToKeep: string) => {
  const wordsToBeKept = wordsToKeep.split(/[^A-Za-zÀ-ȕ0-9]+/);
  const words = text.split(/([^A-Za-zÀ-ȕ0-9]+)/);

  const wordsReplaced = words.map(word => {
    const wordFound = wordsToBeKept.find(wordToBeKept => {
      return wordToBeKept.toLowerCase() === word.toLowerCase();
    });
    if (wordFound) return wordFound;
    return word;
  });
  return wordsReplaced.join('');
};