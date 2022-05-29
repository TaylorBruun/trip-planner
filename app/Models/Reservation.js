import { generateId } from "../Utils/generateId.js"



export class Reservation{
    constructor(reservationData){
        this.id = reservationData.id ?? generateId()
        this.tripId = reservationData.tripId
        this.type = reservationData.type
        this.name = reservationData.name
        this.confNum = reservationData.confNum
        this.address= reservationData.address
        this.date = new Date(reservationData.date)
        this.cost = reservationData.cost
    }

    get Template(){
        return`
        <div class="row reservation d-flex justify-content-between"> <div class="pr-1 col-1">${this.type}</div><div class="pr-1 col-3">${this.name}</div><div class="pr-1 col-1">${this.confNum}</div><div class="pr-1 col-3">${this.address}</div><div class="pr-1 col-2">${this.date.toDateString()}</div><div class="col-1">$${this.cost}</div > <div onclick="app.reservationsController.deleteReservation('${this.id}')" class='selectable col-1 mdi mdi-delete'> </div> </div>
        `
    }
}