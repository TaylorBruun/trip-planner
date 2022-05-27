import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
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
        ProxyState.on('trips', saveState)
        // This gets commented out to go back to hardcode html for layout testing
        _drawTrips()
        loadState()
    }
    
    showTrips(){
        console.log(ProxyState.trips);
    }
    
    addTrip(passedString) {
        console.log('hitting addTrip in controller', passedString);
        window.event.preventDefault()
        let form = window.event.target
        let tripData = {
            // @ts-ignore
            name: form.name.value,
            // @ts-ignore
            date: form.date.value,
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

    updateTrip(id){
        let textbox = window.event.target
        console.log(textbox.value, id);
        tripsService.updateTrip(textbox.value, id)


    }


}