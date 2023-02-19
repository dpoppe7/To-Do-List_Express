const {describe, it, expect} = require('@jest/globals');

const request = require('supertest');

const app = require('./app');

// describe('Some tests', () => {
//     it ('should be able to add', () => {
//         expect(1 + 1).toBe(2);
//         expect(1 + 2).toBe(3);
//     })

//     it ('should be able to concatenate strings', () => {
//         expect("hi " + "there").toBe("hi there");
//     })
// })

describe('the web server', () => {
    it('should give 200 response to /example', () =>
        request(app)
            .get('/hello')
            .expect(200)
    );
 
    it('should give 404 response to /unknown', () =>
        request(app)
            .get('/unknown')
            .expect(404)
    );
 
});