import { ProxyState } from "../AppState.js";
import { itemService } from "../Services/ItemService.js";
import { cartService } from "../Services/CartService.js";


//Private
function _draw() {
  let items = ProxyState.items;
  let template = ''
  let balanceElem = document.getElementById("balance")
    balanceElem.innerText = ` Balance: $${ProxyState.balance}`

  items.forEach(v => template += v.Template)
  document.getElementById("items").innerHTML = /*html*/`
  <div className="card-columns items">
      ${template}
  </div>
  `
}

//Public
export default class ItemController {
  constructor() {
    ProxyState.on("items", _draw);
    ProxyState.on("balance", _draw);
    ProxyState.on("carts", _draw);

    _draw()
  }

  buyItem(data){
    itemService.buyItem(data)
    console.log(data)

    cartService.addToCart(data)
  }

  addBalance(){
    itemService.addBalance()
  }

}
