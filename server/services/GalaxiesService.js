import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
    async getGalaxyById(galaxyId) {
        const galaxy = await dbContext.Galaxies.findById(galaxyId)
        return galaxy
    }
    async createGalaxies(galaxyData) {
        const newGalaxy = await dbContext.Galaxies.create(galaxyData)
        return newGalaxy
    }

    async getGalaxies(query) {
        const Galaxies = await dbContext.Galaxies.find(query)
        return Galaxies
    }

}

export const galaxiesService = new GalaxiesService()