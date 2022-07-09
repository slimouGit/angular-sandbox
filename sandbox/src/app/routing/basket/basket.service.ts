import {Item} from "../shop/item/item.model";
import {EventEmitter} from "@angular/core";

export class BasketService{
  // itemsAdded = new EventEmitter<Item[]>();
  private basketItems = [];

  addItemToBasket(item:Item){
    this.basketItems.push(item);
    // this.itemsAdded.emit(this.basketItems.slice());
    console.log("items in basket", this.basketItems);
  }

  getItemsInBasket() {
    return this.basketItems.slice();
  }
}
