import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"


class ReservationsService{

    addReservation(reservationData){
        console.log('service got data', reservationData);
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(reservationData)]
        console.log('service added reservation', ProxyState.reservations);

    }

}

export const reservationsService = new ReservationsService