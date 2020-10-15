import { ProxyState } from "../AppState.js";
import { cartService } from "../Services/CartService.js";

//Private
function _draw() {
    let carts = ProxyState.carts;
    let template = ''
    carts.forEach(c => template += c.Template)
    document.getElementById("cart").innerHTML = /*html*/`
    <div className="card-columns carts">
        ${template}
    </div>
    `
  }

//Public
export default class CartController {
    constructor() {
      ProxyState.on("carts", _draw);
      
     
    }

  
  }

