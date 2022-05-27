import { generateId } from "../Utils/generateId.js";


export class Trip{
    constructor(tripData){
        this.id = tripData.id || generateId()
        this.name = tripData.name
        this.notes = tripData.notes || ''
        this.date = new Date(tripData.date)
        this.cost = tripData.cost || 0
    }

    get Template(){
        // TODO put something in the button onclick 
        return`
        <div class="trip d-flex flex-column">
            <h3 class="m-1 p-1">${this.name}<span class="mx-4 fs-6 text-muted">${this.date.toDateString()}</span> <button onclick="app.tripsController.deleteTrip('${this.id}')" class="btn close-x m-1 selectable"><p class="mdi mdi-close m-0 p-0 text-secondary"></p></button></h3>
            <p class="reservation">Reservation including all of it's associated details</p>
            <p class="reservation">Reservation including all of it's associated details</p>
                <button class="align-self-end btn btn-primary p-2 m-1 btn-add">Add +</button>
             
                
            <textarea onblur="app.tripsController.updateTrip('${this.id}')" class="textbox" placeholder="Write notes for your trip." name="Trip Notes" id="" cols="30" rows="10">${this.notes}</textarea>
            <h5 class="align-self-end p-1 m-1" >Total: $${this.cost.toFixed(2)}</h5>
          </div>`
    }

}