import { generateId } from "../Utils/generateId.js";


export class Trip{
    constructor(tripData){
        this.id = generateId()
        this.name = tripData.nama


    }


}