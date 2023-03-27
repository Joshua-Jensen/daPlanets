import { Schema } from "mongoose";

export const PlanetSchema = new Schema({
    name: { type: String, maxLength: 15, required: true },
    biome: { type: String, maxLength: 25, required: true },
    atmosphere: { type: Boolean, default: false },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
})