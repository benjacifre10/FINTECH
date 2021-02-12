import { Request, Response } from 'express';
import request from 'request';

class WeatherController {
    /* this function try to get the location and other information of our actual ubication */
    public location(req: Request, res: Response) {
        let url = `${process.env.IP_API_URL}/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=es`;
        request(url, (error: any, response: any, body: any) => {
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
    public current(req: Request, res: Response) {
        if (req.query.city) {
            let url = `${process.env.OPEN_WEATHER_URL}/weather?q=${req.query.city}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
            request(url, (error: any, response: any, body: any) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                return res.json({ data: JSON.parse(body) });
            });
        } else {
            let url = `${process.env.IP_API_URL}/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=en`;
            request(url, (error: any, response: any, body: any) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                else {
                    let result = JSON.parse(body);
                    let url2 = `${process.env.OPEN_WEATHER_URL}/onecall?lat=${result.lat}&lon=${result.lon}&exclude=hourly,daily,minutely&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
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
    /* this function try to get the forecast weather for the next 5 days of our location or the forecast weather from other city */
    /* this is only depends the value of the parameter of city */ 
    public forecast(req: Request, res: Response) {
        if (req.query.city) {
            let url = `${process.env.OPEN_WEATHER_URL}/forecast?q=${req.query.city}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
            request(url, (error: any, response: any, body: any) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                return res.json({ data: JSON.parse(body) });
            });
        } else {
            let url = `${process.env.IP_API_URL}/?fields=status,message,continent,country,countryCode,region,regionName,city,lat,lon,timezone&lang=en`;
            request(url, (error: any, response: any, body: any) => {
                if (error) {
                    return res.status(response.statusCode).json({
                        message: error
                    });
                }
                else {
                    let result = JSON.parse(body);
                    let url2 = `${process.env.OPEN_WEATHER_URL}/forecast?q=${result.regionName}&appid=debe40fdbd3a1fdb8ed601c35d8b0698&lang=es`;
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

}

export const weatherController = new WeatherController();
  