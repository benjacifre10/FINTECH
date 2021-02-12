import { Request, Response } from 'express';
import request from 'request';

class WeatherController {

    public location(req: Request, res: Response) {
        let url = 'http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=es';
        request(url, (error: any, response: any, body: any) => {
            if (error) {
                return res.status(response.statusCode).json({
                    message: error
                });
            }
            return res.json({ message: JSON.parse(body) });
        });
    }
    
    public current(req: Request, res: Response) {
        if (req.query.city) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
            request(url, (error: any, response: any, body: any) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                return res.json({ data: JSON.parse(body) });
            });
        } else {
            let url = 'http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=es';
            request(url, (error: any, response: any, body: any) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                else {
                    let result = JSON.parse(body);
                    console.log(result);
                    let url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${result.lat}&lon=${result.lon}&exclude=hourly,daily,minutely&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
                    request(url2, (error: any, response: any, body: any) => {
                        if (error) {
                            return res.status(response.statusCode).json({
                                message: error
                            });
                        }
                        return res.json({ data: JSON.parse(body)});
                    });
                }
            });
        }
    }
    
    public forecast(req: Request, res: Response) {
        if (req.query.city) {
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${req.query.city}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
            request(url, (error: any, response: any, body: any) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                return res.json({ data: JSON.parse(body) });
            });
        } else {
            let url = 'http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=en';
            request(url, (error: any, response: any, body: any) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                else {
                    let result = JSON.parse(body);
                    console.log(result);
                    let url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${result.regionName}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
                    request(url2, (error: any, response: any, body: any) => {
                        if (error) {
                            return res.status(response.statusCode).json({
                                message: error
                            });
                        }
                        return res.json({ data: JSON.parse(body)});
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

export const weatherController = new WeatherController();
  