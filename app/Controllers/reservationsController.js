import { reservationsService } from "../Services/ReservationsService.js";

export class ReservationsController{
    constructor(){
        console.log('reservations constructor loaded');
    }

    addReservation(tripId){
        window.event.preventDefault()
        console.log("called controller's addReservation function", tripId);
        let form = window.event.target
        console.log(tripId);
        console.log(form.type.value);
        console.log(form.name.value);
        console.log(form.confNum.value);
        console.log(form.address.value);
        console.log(form.date.value);
        console.log(form.cost.value);
        let reservationData = {
            tripId: tripId,
            type: form.type.value,
            name: form.name.value,
            confNum: form.confNum.value,
            address: form.address.value,
            date: form.date.value,
            cost: form.cost.value,
        }
        console.log(reservationData, 'passing this data from controller');
        reservationsService.addReservation(reservationData)
    }

    deleteReservation(id){
        console.log('calling deleteReservation in controller on', id);
    }
}