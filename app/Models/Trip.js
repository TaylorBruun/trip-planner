import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Trip{
    constructor(tripData){
        this.id = tripData.id ?? generateId()
        this.name = tripData.name
        this.notes = tripData.notes ?? ''
        this.date = new Date(tripData.date)
        this.cost = tripData.cost ?? 0
    }

    get Template(){
        
        return`
        <div class="trip d-flex flex-column">
            <h3 class="title m-1 p-1">${this.name}<span class="mx-4 fs-6 text-muted">${this.date.toDateString()}</span> <button onclick="app.tripsController.deleteTrip('${this.id}')" class="btn close-x m-1 selectable"><p class="mdi mdi-close m-0 p-0 text-secondary"></p></button></h3>
            
            ${this.Reservations}
              
           
            <form class="d-flex reservation row flex-row justify-content-around" action="" onsubmit="app.reservationsController.addReservation('${this.id}')">
              <div class="col p-1">
                <input required maxlength="15" type="text" name="type" id="type" placeholder="Type">
              </div>
              <div class="col p-1">
                <input required minlength="3" maxlength="30" type="text" name="name" id="name" placeholder="Reservation name">
              </div>
              <div class="col p-1">
                <input required maxlength="15" type="text" name="confNum" id="confNum" placeholder="Confirmation number">
              </div>
              <div class="col p-1">
                <input required type="text" name="address" id="address" placeholder="Address">
              </div>
              <div class="col p-1">
                <input required type="date" name="date" id="date">
              </div>
              <div class="col p-1">
                <input required min='0'type="number" name="cost" id="cost" placeholder="Cost">
                
                
                </div>
                <button onclick="" class=" col p-1 align-self-end btn btn-primary p-2 btn-add">Add +</button>
                </form>
               
             
                
            <textarea onblur="app.tripsController.updateTrip('${this.id}')" class="textbox" placeholder="Write notes for your trip." name="Trip Notes" id="" cols="30" rows="10">${this.notes}</textarea>
            <h5 class="align-self-end p-1 m-1" >Total: $${this.cost.toFixed(2)}</h5>
          </div>
          
    
          
          `
    }

//     get ResTemplate(){
//         return`
//         <div class="modal fade" id="newReservationModal${this.id}" tabindex="-1" aria-labelledby="reservationModalLabel"
// aria-hidden="true">
// <div class="modal-dialog">
//   <div class="modal-content">
//     <div class="modal-header">
//       <h5 class="modal-title text-center" id="newReservationModalLabel">New Reservation for ${this.name}</h5>
//       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//     </div>
//     <div class="modal-body">
//       <form action="" onsubmit="console.log('${this.id}')">
//         <input type="text" name="type" id="type" placeholder="Type">
//         <input required minlength="3" maxlength="15" type="text" name="name" id="name" placeholder="Reservation name">
//         <input type="text" name="confirmation" id="confirmation" placeholder="Confirmation number">
//         <input type="text" name="address" id="address" placeholder="Address">
//         <input required type="date" name="date" id="date">
//         <input type="number" name="cost" id="cost" placeholder="Cost">
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       <button type="" onclick="console.log('firing reservation button')" class="btn btn-primary">Save Reservation</button>
//       </form>
//     </div>
//   </div>
// </div>
// </div>
//         `
//     }

    get Reservations() {
        let template = ''
        ProxyState.reservations.forEach(r => {
            if (r.tripId == this.id) {
                template += r.Template
                // console.log(r.tripId, 'RES ID');
                // console.log(this.id, 'TRIP ID');
            }
        })

        return template
    }

}


