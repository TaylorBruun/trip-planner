import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/Trip.js"


class TripsService{
    deleteTrip(id) {
        ProxyState.trips = ProxyState.trips.filter(t => t.id != id);
    }


    addTrip(tripData){
        console.log('got tripData in service', tripData);
        ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
        console.log(tripData.date, 'Here is the date data');
        console.log('added new trip to proxystate.trips', ProxyState.trips);
    }


    updateTrip(text, id){
        let foundTrip = ProxyState.trips.find(t => t.id == id)
        foundTrip.notes = text
        ProxyState.trips = ProxyState.trips
        console.log(ProxyState.trips);
        console.log(text);
        console.log(foundTrip);
    }

}

export const tripsService = new TripsService()