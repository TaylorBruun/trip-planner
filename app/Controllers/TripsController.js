import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawTrips() {
    if (ProxyState.trips.length > 0) {

        let template = ''
        ProxyState.trips.forEach(t => {
            template += t.Template
        })
        document.getElementById('trips').innerHTML = template
    }
    else {
        document.getElementById('trips').innerHTML = `<h2 class="display-4 text-muted">You have no trips planned, maybe add a new trip? </h2>`
    }
}



function _confirmSave(){
    Pop.toast("Trip Saved!", 'success')
}

export class TripsController {
    constructor() {
        ProxyState.on('trips', _drawTrips)
        // This gets commented out to go back to hardcode html for layout testing
        _drawTrips()
    }
    
    
    addTrip(passedString) {
        console.log('hitting addTrip in controller', passedString);
        window.event.preventDefault()
        let form = window.event.target
        let tripData = {
            name: form.name.value,
            date: form.date.value.toString(),
        }
        tripsService.addTrip(tripData)
        console.log('passed tripData from controller', tripData);
        _confirmSave()
    }

    deleteTrip(id){
        console.log('hitting delete function in controller', id)
        console.log(ProxyState.trips)
        tripsService.deleteTrip(id)
    }


}