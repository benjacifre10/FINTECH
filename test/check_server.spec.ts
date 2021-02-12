import request from 'supertest';
import {App} from '../src/config/index';
const app = new App().getApp();

// Here i test the server
describe('The server its work fine', () => {
    it('should be worked the server', (done) => {
        request(app).get("/").expect(200, done);
    });
});