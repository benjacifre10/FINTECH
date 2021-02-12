"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherController = void 0;
const request_1 = __importDefault(require("request"));
class WeatherController {
    location(req, res) {
        let url = 'http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=es';
        request_1.default(url, (error, response, body) => {
            if (error) {
                return res.status(response.statusCode).json({
                    message: error
                });
            }
            return res.json({ message: JSON.parse(body) });
        });
    }
    current(req, res) {
        if (req.query.city) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
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
            let url = 'http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=es';
            request_1.default(url, (error, response, body) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                else {
                    let result = JSON.parse(body);
                    console.log(result);
                    let url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${result.lat}&lon=${result.lon}&exclude=hourly,daily,minutely&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
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
    forecast(req, res) {
        if (req.query.city) {
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${req.query.city}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
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
            let url = 'http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=en';
            request_1.default(url, (error, response, body) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                else {
                    let result = JSON.parse(body);
                    console.log(result);
                    let url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${result.regionName}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
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
        // console.log(req.query);
        // let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${result.lat}&lon=${result.lon}&exclude=hourly,daily,minutely&appid=debe40fdbd3a1fdb8ed601c35d8b0698`;
        // let url = `https://api.openweathermap.org/data/2.5/forecast?q=${req.query.city}&appid=debe40fdbd3a1fdb8ed601c35d8b0698`;
        // let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly&appid=debe40fdbd3a1fdb8ed601c35d8b0698';
        // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
        // request(url, (error: any, response: any, body: any) => {
        //     return res.json({ data: JSON.parse(body) });
        // });
    }
}
exports.weatherController = new WeatherController();
