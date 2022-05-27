import { generateId } from "../Utils/generateId.js";


export class Trip{
    constructor(tripData){
        this.id = generateId()
        this.name = tripData.name
        this.type = tripData.type
        this.date = tripData.date
        this.cost = tripData.cost
    }


}