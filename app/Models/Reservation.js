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
        <div class="row reservation d-flex justify-content-between"> <div class="py-1 border-bottom  col-md-1">${this.type}</div>
        <div class="py-1 border-bottom  col-md-3">${this.name}</div>
        <div class="py-1 border-bottom  col-md-1">${this.confNum}</div>
        <div class="py-1 border-bottom  col-md-3">${this.address}</div>
        <div class="py-1 border-bottom  col-md-2">${this.date.toDateString()}</div>
        <div class= "py-1 border-bottom col-md-1">$${this.cost}</div>
        <div onclick="app.reservationsController.deleteReservation('${this.id}')" class=' py-1 border-bottom  col-md-1 '> <p class='select-contain fs-5 selectable mdi mdi-delete m-0'> </p> </div> 
        </div>
        `
    }
}