import { Router } from 'express';
import { homeController } from './../controllers/home.controller';

class HomeRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router
            .get('/', homeController.initial);
    }
}

export default new HomeRoutes().router;