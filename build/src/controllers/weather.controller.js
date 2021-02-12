"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherController = void 0;
const request_1 = __importDefault(require("request"));
class WeatherController {
    /* this function try to get the location and other information of our actual ubication */
    location(req, res) {
        let url = `${process.env.IP_API_URL}/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=es`;
        request_1.default(url, (error, response, body) => {
            if (error) {
                return res.status(response.statusCode).json({
                    message: error
                });
            }
            return res.json({ message: JSON.parse(body) });
        });
    }
    /* this function try to get the current weather of our location or the current weather from other city */
    /* this is only depends the value of the parameter of city */
    current(req, res) {
        if (req.query.city) {
            let url = `${process.env.OPEN_WEATHER_URL}/weather?q=${req.query.city}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
            request_1.default(url, (error, response, body) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                return res.json({ data: JSON.parse(body) });
            });
        }
        else {
            let url = `${process.env.IP_API_URL}/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=en`;
            request_1.default(url, (error, response, body) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                else {
                    let result = JSON.parse(body);
                    console.log(result);
                    let url2 = `${process.env.OPEN_WEATHER_URL}/onecall?lat=${result.lat}&lon=${result.lon}&exclude=hourly,daily,minutely&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
                    request_1.default(url2, (error, response, body) => {
                        if (error) {
                            return res.status(response.statusCode).json({
                                message: error
                            });
                        }
                        return res.json({ data: JSON.parse(body) });
                    });
                }
            });
        }
    }
    /* this function try to get the forecast weather for the next 5 days of our location or the forecast weather from other city */
    /* this is only depends the value of the parameter of city */
    forecast(req, res) {
        if (req.query.city) {
            let url = `${process.env.OPEN_WEATHER_URL}/forecast?q=${req.query.city}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
            request_1.default(url, (error, response, body) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                return res.json({ data: JSON.parse(body) });
            });
        }
        else {
            let url = `${process.env.IP_API_URL}/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=en`;
            request_1.default(url, (error, response, body) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                else {
                    let result = JSON.parse(body);
                    console.log(result);
                    let url2 = `${process.env.OPEN_WEATHER_URL}/forecast?q=${result.regionName}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
                    request_1.default(url2, (error, response, body) => {
                        if (error) {
                            return res.status(response.statusCode).json({
                                message: error
                            });
                        }
                        return res.json({ data: JSON.parse(body) });
                    });
                }
            });
        }
    }
}
exports.weatherController = new WeatherController();
