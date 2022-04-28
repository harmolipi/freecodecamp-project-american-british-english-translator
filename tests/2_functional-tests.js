const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

const validInput = {
    text: 'I like to play soccer.',
    locale: 'american-to-british',
}

suite('Functional Tests', () => {
    test('Translation with text and locale fields: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send(validInput)
            .end((_err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.text, 'I like to play soccer.');
                assert.equal(res.body.translation, 'I like to play <span class="highlight">football</span>.');
                done();
            });
    });

    test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                ...validInput,
                locale: 'american-to-indonesian',
            })
            .end((_err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Invalid value for locale field');
                done();
            });
    });

    test('Translation with missing text field: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                locale: validInput.locale,
            })
            .end((_err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            });
    });

    test('Translation with missing locale field: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                text: validInput.text,
            })
            .end((_err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            });
    });

    test('Translation with empty text: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                ...validInput,
                text: '',
            })
            .end((_err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'No text to translate');
                done();
            });
    });

    test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                ...validInput,
                locale: 'british-to-american',
            })
            .end((_err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.text, validInput.text);
                assert.equal(res.body.translation, 'Everything looks good to me!');
                done();
            });
    });
});
