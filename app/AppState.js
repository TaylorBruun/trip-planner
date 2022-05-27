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
