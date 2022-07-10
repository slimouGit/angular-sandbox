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

  getTotalCost(itemsInBasket: Item[]) {
    let totalCost: number = 0;
    for(let i = 0; i<itemsInBasket.length; i++){
      totalCost += itemsInBasket[i].price;
    }
    return +totalCost.toFixed(2);
  }
}
