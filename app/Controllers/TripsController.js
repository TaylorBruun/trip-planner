import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";



function _drawTrips() {
    if (ProxyState.trips.length > 0) {
        let template = ''
        ProxyState.reservations.sort((a, b) => a.date - b.date)

        ProxyState.trips.forEach(t => {
            // console.log(t);
            let tripTotalCost = 0
            ProxyState.reservations.forEach(r => {
                // console.log(r);
                if (r.tripId == t.id) {
                    tripTotalCost += r.cost
                    // console.log(r.cost, "r.cost");
                    // console.log(tripTotalCost, "total cost");
                }
            })
            t.cost = tripTotalCost
            // console.log(t.cost);
        })
        ProxyState.trips.forEach(t => {
            template += t.Template
        })
        document.getElementById('trips').innerHTML = template
    }
    else {
        document.getElementById('trips').innerHTML = `<h2 class="display-4 text-muted">You have no trips planned, maybe add a new trip? </h2>`
    }
}

//unused, see note at _draw
function _drawResModals() {
    let template = ''
    ProxyState.trips.forEach(t => {
        template += t.ResTemplate
    })
    document.getElementById('reservation-modals').innerHTML = template
    // console.log('drawing modals')
}

function _confirmSave(){
    Pop.toast("Trip Saved!", 'success')
}


// _drawResModals is an artifact of my foolhardy attempt to draw separate modals to the page. This was not workable because of suspected wonkiness involving injection of modals (the submit buttons which worked when hardcoded did not trigger the "onsubmit" NOTE consider revisiting with popover instead)
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
    showReservations(){
        console.log(ProxyState.reservations);
    }
    
    addTrip() {
        // console.log('hitting addTrip in controller');
        window.event.preventDefault()
        let form = window.event.target
        let tripData = {
            // @ts-ignore
            name: form.name.value,
            // @ts-ignore
            date: form.date.value,
        }
        tripsService.addTrip(tripData)
        // console.log('passed tripData from controller', tripData);
        _confirmSave()
    }

    async deleteTrip(id){
        // console.log('hitting delete function in controller', id)
        // console.log(ProxyState.trips)
        if(await Pop.confirm("Really delete this trip?")){
            tripsService.deleteTrip(id)
        }
    }

    updateTrip(id){
        let textbox = window.event.target
        // console.log(textbox.value, id, 'from controller');
        tripsService.updateTrip(textbox.value, id)
    }

    flipIcon(){
        let icon = window.event.target
        // console.log(icon, 'icon');
        // console.log(window.event.target, 'window target');
        icon.classList.toggle('flip')
           
    }


}