import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .post('', this.createGalaxy)
            .get('/:galaxyId', this.getGalaxyById)
    }

    async getGalaxies(req, res, next) {
        try {
            const query = req.query
            const Galaxies = await galaxiesService.getGalaxies(query)
            return res.send(Galaxies)
        }
        catch (error) {
            next(error)
        }
    }
    async createGalaxy(req, res, next) {
        try {
            const galaxyData = req.body
            const newGalaxy = await galaxiesService.createGalaxies(galaxyData)
            return res.send
        }
        catch (error) {
            next(error)
        }
    }

    async getGalaxyById(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const selectedGalaxy = await galaxiesService.getGalaxyById(galaxyId)
            return selectedGalaxy
        }
        catch (error) {
            next(error)
        }
    }
}