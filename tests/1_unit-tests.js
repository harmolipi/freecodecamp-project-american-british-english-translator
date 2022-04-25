const chai = require('chai');
const { suite } = require('mocha');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    const translator = new Translator();
    suite('American to British English', () => {
        test('Translate Mangoes are my favorite fruit. to British English', () => {
            const americanToBritish = translator.translate(
                'Mangoes are my favorite fruit.',
                'american-to-british'
            );

            assert.equal(americanToBritish, 'Mangoes are my favourite fruit.');
        });

        test('Translate I ate yogurt for breakfast. to British English', () => {
            const americanToBritish = translator.translate(
                'I ate yogurt for breakfast.',
                'american-to-british'
            );

            assert.equal(americanToBritish, 'I ate yoghurt for breakfast.');
        });

        test(`Translate "We had a party at my friend's condo." to British English`, () => {
            const americanToBritish = translator.translate(
                "We had a party at my friend's condo.",
                'american-to-british'
            );

            assert.equal(americanToBritish, "We had a party at my friend's flat.");
        });

        test(`Translate "Can you toss this in the trashcan for me?" to British English`, () => {
            const americanToBritish = translator.translate(
                'Can you toss this in the trashcan for me?',
                'american-to-british'
            );

            assert.equal(americanToBritish, 'Can you toss this in the bin for me?');
        });

        test(`Translate "The parking lot was full." to British English`, () => {
            const americanToBritish = translator.translate(
                'The parking lot was full.',
                'american-to-british'
            );

            assert.equal(americanToBritish, 'The car park was full.');
        });

        test(`Translate "Like a high tech Rube Goldberg machine." to British English`, () => {
            const americanToBritish = translator.translate(
                'Like a high tech Rube Goldberg machine.',
                'american-to-british'
            );

            assert.equal(
                americanToBritish,
                'Like a high tech Heath Robinson device.'
            );
        });

        test(`Translate "To play hooky means to skip class or work." to British English`, () => {
            const americanToBritish = translator.translate(
                'To play hooky means to skip class or work.',
                'american-to-british'
            );

            assert.equal(
                americanToBritish,
                'To bunk off means to skip class or work.'
            );
        });

        test(`Translate "No Mr. Bond, I expect you to die." to British English`, () => {
            const americanToBritish = translator.translate(
                'No Mr. Bond, I expect you to die.',
                'american-to-british'
            );

            assert.equal(americanToBritish, 'No Mr Bond, I expect you to die.');
        });

        test(`Dr. Grosh will see you now." to British English`, () => {
            const americanToBritish = translator.translate(
                'Dr. Grosh will see you now.',
                'american-to-british'
            );

            assert.equal(americanToBritish, 'Dr Grosh will see you now.');
        });

        test(`Translate "Lunch is at 12:15 today." to British English`, () => {
            const americanToBritish = translator.translate(
                'Lunch is at 12:15 today.',
                'american-to-british'
            );

            assert.equal(americanToBritish, 'Lunch is at 12.15 today.');
        });
    });

    suite('British to American English', () => {
        test(`Translate "We watched the footie match for a while." to American English`, () => {
            const britishtoAmerican = translator.translate(
                'We watched the footie match for a while.',
                'british-to-american'
            );

            assert.equal(
                britishtoAmerican,
                'We watched the soccer match for a while.'
            );
        });

        test(`Translate "Paracetamol takes up to an hour to work." to American English`, () => {
            const britishtoAmerican = translator.translate(
                'Paracetamol takes up to an hour to work.',
                'british-to-american'
            );

            assert.equal(britishtoAmerican, 'Tylenol takes up to an hour to work.');
        });

        test(`Translate "First, caramelise the onions." to American English`, () => {
            const britishtoAmerican = translator.translate(
                'First, caramelise the onions.',
                'british-to-american'
            );

            assert.equal(britishtoAmerican, 'First, caramelize the onions.');
        });

        test(`Translate "I spent the bank holiday at the funfair." to American English`, () => {
            const britishtoAmerican = translator.translate(
                'I spent the bank holiday at the funfair.',
                'british-to-american'
            );

            assert.equal(
                britishtoAmerican,
                'I spent the public holiday at the carnival.'
            );
        });

        test(`Translate "I had a bicky then went to the chippy." to American English`, () => {
            const britishtoAmerican = translator.translate(
                'I had a bicky then went to the chippy.',
                'british-to-american'
            );

            assert.equal(
                britishtoAmerican,
                'I had a cookie then went to the fish-and-chip shop.'
            );
        });

        test(`Translate "I've just got bits and bobs in my bum bag." to American English`, () => {
            const britishtoAmerican = translator.translate(
                "I've just got bits and bobs in my bum bag.",
                'british-to-american'
            );

            assert.equal(
                britishtoAmerican,
                "I've just got odds and ends in my fanny pack."
            );
        });

        test(`Translate "The car boot sale at Boxted Airfield was called off." to American English`, () => {
            const britishtoAmerican = translator.translate(
                'The car boot sale at Boxted Airfield was called off.',
                'british-to-american'
            );

            assert.equal(
                britishtoAmerican,
                'The swap meet at Boxted Airfield was called off.'
            );
        });

        test(`Translate "Have you met Mrs Kalyani?" to American English`, () => {
            const britishtoAmerican = translator.translate(
                'Have you met Mrs Kalyani?',
                'british-to-american'
            );

            assert.equal(britishtoAmerican, 'Have you met Mrs. Kalyani?');
        });

        test(`Translate "Prof Joyner of King's College, London." to American English`, () => {
            const britishtoAmerican = translator.translate(
                "Prof Joyner of King's College, London.",
                'british-to-american'
            );

            assert.equal(
                britishtoAmerican,
                "Prof. Joyner of King's College, London."
            );
        });

        test(`Translate "Tea time is usually around 4 or 4.30." to American English`, () => {
            const britishtoAmerican = translator.translate(
                'Tea time is usually around 4 or 4.30.',
                'british-to-american'
            );

            assert.equal(britishtoAmerican, 'Tea time is usually around 4 or 4:30.');
        });
    });

    // suite('Highlight translations', () => {
    //     test(`Highlight translation in "Mangoes are my favorite fruit."`, () => {
    //         const highlightedTranslation = translator.highlightTranslation(
    //             'Mangoes are my favourite fruit.'
    //         );

    //         assert.equal(
    //             highlightedTranslation,
    //             'Mangoes are my <span class="highlight">favourite</span> fruit.'
    //         );
    //     });

    //     test(`Highlight translation in "I ate yogurt for breakfast."`, () => {
    //         const highlightedTranslation = translator.highlightTranslation(
    //             'I ate yogurt for breakfast.'
    //         );

    //         assert.equal(
    //             highlightedTranslation,
    //             'I ate <span class="highlight">yoghurt</span> for breakfast.'
    //         );
    //     });

    //     test(`Highlight translation in "We watched the footie match for a while."`, () => {
    //         const highlightedTranslation = translator.highlightTranslation(
    //             'We watched the footie match for a while.'
    //         );

    //         assert.equal(
    //             highlightedTranslation,
    //             'We watched the <span class="highlight">soccer</span> match for a while.'
    //         );
    //     });

    //     test(`Highlight translation in "Paracetamol takes up to an hour to work."`, () => {
    //         const highlightedTranslation = translator.highlightTranslation(
    //             'Paracetamol takes up to an hour to work.'
    //         );

    //         assert.equal(
    //             highlightedTranslation,
    //             '<span class="highlight">Paracetamol</span> takes up to an hour to work.'
    //         );
    //     });
    // });
});