import { dbContext } from "../db/DbContext.js"

class PlanetsService {
    async createPlanet(planetData) {
        const createdPlanet = await dbContext.Planets.create(planetData)
        return createdPlanet
    }

}

export const planetsService = new PlanetsService()