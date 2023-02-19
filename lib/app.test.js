const request = require('supertest');
const { describe, it, expect } = require('@jest/globals');

const app = require('./app');
const config = require('../../lib/config');
config.logLevel = 'silent';

const app = require('./app');

describe('the /hello endpoint', () => {
    it ('should respond with 200', () => 
        request(app)
            .get('/hello')
            .expect(200)
    );

    it ('should respond with plain text', () => 
        request(app)
            .get('/hello')
            .expect('Content-Type', /^text\/plain/)
    );

    it ('should match the snapshot', () => 
        request(app)
            .get('/hello')
            .expect(res => {
                expect(res.text).toMatchSnapshot()
            }
    ));
});
