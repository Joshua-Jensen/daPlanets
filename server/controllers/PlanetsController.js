import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .post('', this.createPlanet)
    }
    async createPlanet(req, res, next) {
        try {
            const planetData = req.body
            const createdPlanet = await planetsService.createPlanet(planetData)
            return res.send(createdPlanet)
        }
        catch (error) {
            next(error)
        }
    }
}