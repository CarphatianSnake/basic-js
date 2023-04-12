/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  onError(word, key) {
    if (!word || !key) {
      throw new Error('Incorrect arguments!');
    }
  }

  isLetter(letter) {
    return letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90;
  }

  toUpCase(word, key) {
    const w = word.toUpperCase();
    const k = key.toUpperCase();
    return { w, k }
  }

  getLettersNumbers(letter, key, keyIndex) {
    const letterNumber = letter.charCodeAt() - 65;
    const keyLetterIndex = keyIndex % key.length;
    const keyLetterNumber = key[keyLetterIndex].charCodeAt() - 65;
    return { letterNumber, keyLetterNumber };
  }

  getLetter(letterNum) {
    if (letterNum < 0) {
      return String.fromCharCode(letterNum + 26 + 65);
    }
    return String.fromCharCode(letterNum + 65);
  }

  getResult(result) {
    return this.direct ? result : result.split('').reverse().join('');
  }
  
  encrypt(word, key) {

    this.onError(word, key);
    
    let result = "";
    const { w, k } = this.toUpCase(word, key);

    for (let i = 0, j = 0; i < word.length; i++) {
      
      const letter = w[i];
      const isLetter = this.isLetter(letter);

      if (isLetter) {
        const { letterNumber, keyLetterNumber } = this.getLettersNumbers(letter, k, j);
        const encLetterNum = (letterNumber + keyLetterNumber) % 26;
        result += this.getLetter(encLetterNum);
        j++;
      } else {
        result += letter;
      }

    }

    return this.getResult(result);

  }

  decrypt(word, key) {

    this.onError(word, key);

    let result = "";
    const { w, k } = this.toUpCase(word, key);

    for (let i = 0, j = 0; i < word.length; i++) {
      const letter = w[i];
      const isLetter = this.isLetter(letter);

      if (isLetter) {
        const { letterNumber, keyLetterNumber } = this.getLettersNumbers(letter, k, j);
        const decLetterNum = (letterNumber - keyLetterNumber) % 26;
        result += this.getLetter(decLetterNum)
        j++;
      } else {
        result += letter;
      }

    }
    
    return this.getResult(result);

  }
}

module.exports = {
  VigenereCipheringMachine
};
