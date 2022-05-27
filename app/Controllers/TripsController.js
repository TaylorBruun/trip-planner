import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawTrips(){

   let  template = ''
    ProxyState.trips.forEach(t => {
        template += t.Template
    })
    document.getElementById('trips').innerHTML = template
}



function _confirmSave(){
    Pop.toast("Trip Saved!", 'success')
}

export class TripsController {
    constructor() {
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


}