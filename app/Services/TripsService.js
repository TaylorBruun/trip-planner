import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/Trip.js"


class TripsService{
    addTrip(tripData){
        console.log('got tripData in service', tripData);
        ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
        console.log('added new trip to proxystate.trips', ProxyState.trips);
    }




}

export const tripsService = new TripsService()