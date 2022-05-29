import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";




export function saveState(){
// console.log('saving');
let data = {
    trips: ProxyState.trips,
    reservations: ProxyState.reservations,
}
window.localStorage.setItem('tripPlanner', JSON.stringify(data))
}

export function loadState(){
// console.log('loading');
let data = window.localStorage.getItem('tripPlanner')
if(data){
    let obj = JSON.parse(data)
    ProxyState.trips = obj.trips.map(t => new Trip(t))
    ProxyState.reservations = obj.reservations.map(r => new Reservation(r))
}
}