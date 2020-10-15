import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";
import { cartService } from "./CartService.js";

class ItemService {
  constructor(){
    console.log("hello from item service")
  }
  buyItem(id){
    let item = ProxyState.items.find(i=> i.id == id)

    if(balance < item.price){
      alert("insufficient funds")
      return
    } 
        item.stock --
    ProxyState.balance -= item.price
  }
  

  addBalance(){
    ProxyState.balance += 20
    console.log(balance)
    
  }

}

export const itemService = new ItemService();

