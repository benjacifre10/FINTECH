import { Request, Response } from 'express';

class HomeController {
    public initial = (req: Request, res: Response): Response => {
        return res.json({ message: "success" });
    }
}

export const homeController = new HomeController();