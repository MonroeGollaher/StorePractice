import { ProxyState } from "../AppState.js";
import Cart from "../Models/Cart.js";
import Item from "../Models/Item.js"
import ItemController from "../Controllers/ItemController.js";

class CartService {
    constructor(){
    console.log("hello from cart service")
      
    }
    addToCart(id){
        let item = ProxyState.items.find(i=> i.id == id)
        let cart = ProxyState.carts
        cart.push(new Item(item))
        ProxyState.carts = cart
        console.log(cart)
    }
  }

export const cartService = new CartService();
