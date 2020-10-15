import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Item from "./Models/Item.js"

class AppState extends EventEmitter {
  carts = []
  /** @type {Item[]} */
  items = [ new Item({name: "pocket knife", price: 15, description: "assisted opening", stock: 15, img: "https://www.rockler.com/media/catalog/product/cache/3434eb5edc1f5c9809271cab5a58bac7/5/3/53335-02-1000.jpg"}),
            new Item({name: "saw", price: 25, description: "tree cutter downer", stock: 15, img: "https://www.canadianpreparedness.com/wp-content/uploads/2018/10/wsi-imageoptim-DSC_0157.jpg"})]

  balance = 200
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
