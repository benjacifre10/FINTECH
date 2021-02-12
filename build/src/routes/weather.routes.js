"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weather_controller_1 = require("./../controllers/weather.controller");
class WeatherRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router
            .get('/location', weather_controller_1.weatherController.location)
            .get('/current/', weather_controller_1.weatherController.current)
            .get('/forecast/', weather_controller_1.weatherController.forecast);
    }
}
exports.default = new WeatherRoutes().router;
