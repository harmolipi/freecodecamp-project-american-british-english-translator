const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  translate(text, locale) {
    const wordMap = locale === 'american-to-british' ? americanOnly : britishOnly;
    const splitText = text.split(' ');
    const translation = locale === 'american-to-british' ? this.americanToBritish(splitText) : this.britishToAmerican(splitText);
    
    return translation;
  }

  americanToBritish(text) {
    const isAmericanTime = /^[01]*[0-9]+:[1-6]*[0-9]+$/;
    const isAmericanTitle = (word) => Object.keys(americanToBritishTitles).include(word);

    const translatedText = text.map((word) => {
      if (isAmericanTime.test(word)) {
        return word.replace(':', '.');
      }

      return word;
    });

    return translatedText;
  }

  britishToAmerican(text) {
    const isBritishTime = /^[01]*[0-9]+.[1-6]*[0-9]+$/;

    const translatedText = text.map((word) => {
      if (isBritishTime.test(word)) {
        return word.replace('.', ':');
      }
      
      return word;
    });

    return translatedText;
  }

  capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
  }
}

module.exports = Translator;