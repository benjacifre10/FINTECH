"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("./../controllers/home.controller");
class HomeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router
            .get('/', home_controller_1.homeController.initial);
    }
}
exports.default = new HomeRoutes().router;
