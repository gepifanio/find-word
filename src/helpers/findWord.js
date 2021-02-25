const findWord = (words, str) => {
  if (str.length) {
    str = str.split('');

    let stringSize = str.length;

    return words.filter(word => {
      return str.every(char => {
        if (word.length === stringSize) {
          return word.includes(char);
        }
      });
    });
  }

  return '';
};

export default findWord;
