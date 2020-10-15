import ItemController from "./Controllers/ItemController.js";
import CartController from "./Controllers/CartController.js";


class App {
  itemController = new ItemController()
  cartController = new CartController()
}

window["app"] = new App();
