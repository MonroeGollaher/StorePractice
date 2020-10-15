import {generateId} from "../Utils/GenerateID.js"

export default class Item {
    constructor({name, price, description, stock, img}) {
        this.name = name
        this.price = price
        this.description = description
        this.stock = stock
        this.img = img
        this.id = generateId()
    }

    get Template() {

        return /*html*/`
        
            <div class="card p-2 value col-4">
                <img class="card-img-top img-fluid" src="${this.img}" alt="">
                <h3>${this.name}</h3>
                <h4>${this.price}</h4>
                <p>Description: ${this.description} </p>
                <p>Stock: ${this.stock} </p>
                <button class="btn-success" onclick=app.itemController.buyItem('${this.id}')>Buy</button>
            </div>
        
        `

    }
}
