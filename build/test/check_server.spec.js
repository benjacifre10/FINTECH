"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../src/config/index");
const should_1 = __importDefault(require("should"));
const app = new index_1.App().getApp();
// Here i test the server
describe('The server its work fine', () => {
    it('should be exists', () => {
        should_1.default.exist(app);
    });
    it('should be worked the server', (done) => {
        supertest_1.default(app).get("/").expect(200, done);
    });
});
