import request from 'supertest';
import {App} from '../src/config/index';
import should from 'should';
const app = new App().getApp();

// Here i test the differents endpoints
describe('The endpoints should works fine', () => {
    it('should be exists', () => {
        should.exist(app);
    });
    it('Location Endpoint', (done) => {
        request(app).get("/v1/location").expect(200, done);
    });
    it('Current Endpoint', (done) => {
        request(app).get("/v1/current").expect(200, done);
    });
    it('Forecast Endpoint', (done) => {
        request(app).get("/v1/forecast").expect(200, done);
    });
});