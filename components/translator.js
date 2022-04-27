const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');
const britishToAmericanSpelling = {};
const britishToAmericanTitles = {};

Object.keys(americanToBritishSpelling).forEach((word) => {
    britishToAmericanSpelling[americanToBritishSpelling[word]] = word;
});

Object.keys(americanToBritishTitles).forEach((word) => {
    britishToAmericanTitles[americanToBritishTitles[word]] = word;
});

class Translator {
    translate(text, locale) {
        const error = this.validateInput(text, locale);
        if (error.length > 0) return { error };

        const translation =
            locale === 'american-to-british' ?
            this.americanToBritish(text) :
            this.britishToAmerican(text);

        return translation.toLowerCase() === text.toLowerCase() ? 'Everything looks good to me!' : this.capitalize(translation);
    }

    validateInput(text, locale) {
        const validLocales = ['american-to-british', 'british-to-american'];
        let error = '';

        if (text === '') {
            error = 'No text to translate';
        } else if (!text || !locale) {
            error = 'Required field(s) missing';
        } else if (!validLocales.includes(locale)) {
            error = 'Invalid value for locale field';
        }

        return error;
    }

    americanToBritish(text) {
        const americanTime = /[01]*[0-9]+:[1-6]+[0-9]+/;
        let translated = text;

        translated = translated.replace(americanTime, (time) => {
            return this.highlightText(time.replace(':', '.'));
        });

        Object.keys(americanOnly).forEach((word) => {
            const wordCheck = new RegExp(word, 'i')
            translated = translated.replace(
                wordCheck,
                this.highlightText(americanOnly[word])
            );
        });

        Object.keys(americanToBritishSpelling).forEach((word) => {
            const wordCheck = new RegExp(word, 'i')
            translated = translated.replace(
                wordCheck,
                this.highlightText(americanToBritishSpelling[word])
            );
        });

        Object.keys(americanToBritishTitles).forEach((word) => {
            const wordCheck = new RegExp(word, 'i')
            translated = translated.replace(
                wordCheck,
                this.highlightText(this.capitalize(americanToBritishTitles[word]))
            );
        });

        return translated;
    }

    britishToAmerican(text) {
        const britishTime = /^[01]*[0-9]+.[1-6]+[0-9]+$/;
        let translated = text;

        translated = translated.replace(britishTime, (time) => {
            return this.highlightText(time.replace('.', ':'));
        });

        Object.keys(britishOnly).forEach((word) => {
            const wordCheck = new RegExp(word, 'i')
            translated = translated.replace(
                wordCheck,
                this.highlightText(britishOnly[word])
            );
        });

        Object.keys(britishToAmericanSpelling).forEach((word) => {
            const wordCheck = new RegExp(word, 'i')
            translated = translated.replace(
                wordCheck,
                this.highlightText(britishToAmericanSpelling[word])
            );
        });

        Object.keys(britishToAmericanTitles).forEach((word) => {
            const wordCheck = new RegExp(word, 'i')
            translated = translated.replace(
                wordCheck,
                this.highlightText(this.capitalize(britishToAmericanTitles[word]))
            );
        });

        return translated;
    }

    highlightText(text) {
        return `<span class="highlight">${text}</span>`;
    }

    capitalize(word) {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
    }
}

module.exports = Translator;