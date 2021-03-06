import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"


class ReservationsService{
    deleteReservation(id) {
        // console.log('called deleteReservation in service on', id);
        ProxyState.reservations = ProxyState.reservations.filter(r => r.id != id)
    }

    addReservation(reservationData){
        // console.log('service got data', reservationData);
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(reservationData)]
        // console.log('service added reservation', ProxyState.reservations);

    }

}

export const reservationsService = new ReservationsService