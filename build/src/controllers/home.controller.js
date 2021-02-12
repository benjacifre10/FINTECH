"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
class HomeController {
    constructor() {
        this.initial = (req, res) => {
            return res.json({ message: "success" });
        };
    }
}
exports.homeController = new HomeController();
