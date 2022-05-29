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


function _drawResModals() {
    let template = ''
    ProxyState.trips.forEach(t => {
        template += t.ResTemplate
    })
    document.getElementById('reservation-modals').innerHTML = template
    console.log('drawing modals')
}

function _confirmSave(){
    Pop.toast("Trip Saved!", 'success')
}


// _drawResModals is an artifact of my foolhardy attempt to draw separate modals to the page
function _draw(){
    _drawTrips()
    // _drawResModals()
}

export class TripsController {
    constructor() {
        ProxyState.on('trips', _draw)
        ProxyState.on('trips', saveState)
        ProxyState.on('reservations', _draw)
        ProxyState.on('reservations', saveState)
        // // This gets commented out to go back to hardcode html for layout testing
        _draw()
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
        console.log(textbox.value, id, 'from controller');
        tripsService.updateTrip(textbox.value, id)


    }


}