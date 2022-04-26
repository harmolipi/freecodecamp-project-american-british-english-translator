const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
    translate(text, locale) {
      const error = this.validateInput(text, locale);
      if (error.length > 0) return { error };
      
      const splitText = text.split(' ');
      const translation =
          locale === 'american-to-british' ?
          this.americanToBritish(splitText) :
          this.britishToAmerican(splitText);
    
      return translation.join(' ');
    }

  validateInput(text, locale) {
    const validLocales = [
      'american-to-british',
      'british-to-american'
    ];
    let error = '';
  
    if (text === '') {
      error = 'No text to translate';
    } else if (!text || !locale) {
      error = 'Required field(s) missing';
    } else if (!validLocales.includes(locale)) {
      error = 'Invalid value for locale field';
    }

    console.log('error', error);
    return error;
  }

    americanToBritish(text) {
        const isAmericanTime = /^[01]*[0-9]+:[1-6]*[0-9]+$/;
        const isAmericanTitle = (word) =>
            Object.keys(americanToBritishTitles).includes(word);

        const translatedText = text.map((word) => {
            if (isAmericanTime.test(word)) {
                return word.replace(':', '.');
            } else if (isAmericanTitle(word)) {
                return americanToBritishTitles[word];
            } else if (americanToBritishSpelling[word]) {
                return americanToBritishSpelling[word];
            } else {
                return word;
            }
        });

        return translatedText;
    }

    britishToAmerican(text) {
        const isBritishTime = /^[01]*[0-9]+.[1-6]*[0-9]+$/;

        const translatedText = text.map((word) => {
            if (isBritishTime.test(word)) {
                return word.replace('.', ':');
            } else if (americanToBritishTitles[word]) {
                return americanToBritishTitles[word];
            } else if (Object.values(americanToBritishSpelling).includes(word)) {
                console.log(
                    Object.values(americanToBritishSpelling).find(
                        (key) => americanToBritishSpelling[key] === word
                    )
                );
                return Object.values(americanToBritishSpelling).find(
                    (key) => americanToBritishSpelling[key] === word
                );
            } else {
                return word;
            }
        });

        return translatedText;
    }

    capitalize(word) {
        return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
    }
}

module.exports = Translator;