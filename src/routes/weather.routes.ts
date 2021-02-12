import { Router } from 'express';
import { weatherController } from './../controllers/weather.controller';

class WeatherRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router
            .get('/location', weatherController.location)
            .get('/current/', weatherController.current)
            .get('/forecast/', weatherController.forecast);
    }
}

export default new WeatherRoutes().router;