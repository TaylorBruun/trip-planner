import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";



export function saveState(){
console.log('saving');
let data = {
    trips: ProxyState.trips,
    // TODO uncomment below when ready to work with reservations
    // reservations: ProxyState.reservations,
}
window.localStorage.setItem('tripPlanner', JSON.stringify(data))
}

export function loadState(){
console.log('loading');
let data = window.localStorage.getItem('tripPlanner')
if(data){
    let obj = JSON.parse(data)
    ProxyState.trips = obj.trips.map(t => new Trip(t))
    // TODO uncomment below when ready to work with reservations
    // ProxyState.reservations = obj.reservations.map(r => new Reservation(r))
}
}