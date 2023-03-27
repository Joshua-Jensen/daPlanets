import { Schema } from "mongoose"

export const GalaxySchema = new Schema({
    name: { type: String, required: true, maxLength: 15 },
    stars: { type: Number, required: true, max: 1000 }
})