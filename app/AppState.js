import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
 /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({
      name: 'Scenic Scottsdale AZ',
      date: '2022/09/25',
    }),
    new Trip({
      name: 'Conference Convention',
      date: '2022/07/18',
    }),
    new Trip({
      name: 'Northeast Beekeepers Association',
      date: '2022/08/03',
    }),
  ]
  reservations=[
    new Reservation({
      tripId: this.trips[0].id,
      type: 'Flight',
      name: 'BOI to...Scottsdale',
      confNum: 'IEJP51',
      address: "1933 Departure Blvd.",
      date: new Date('2022-3-5'),
      cost: 65,
    }),
    new Reservation({
      tripId: this.trips[0].id,
      type: 'Hotel',
      name: 'Scottsdale Inn & Suites',
      confNum: 'PL4671',
      address: "138 Scottsdale Ave.",
      date: new Date('2022-3-6'),
      cost: 195,
    }),
    new Reservation({
      tripId: this.trips[1].id,
      type: 'Hotel',
      name: 'Convention Center Garden Resort',
      confNum: 'OK87CKJ',
      address: "992 Conference Way.",
      date: new Date('2023-8-16'),
      cost: 395,
    }),
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
