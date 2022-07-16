import {Item} from "../shop/item/item.model";
import { Subject } from "rxjs";
import {Router} from "@angular/router";

export class BasketService{

  // itemsAdded = new EventEmitter<Item[]>();
  private basketItems = [];
  basketChanged = new Subject<Item[]>();



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

  emptyBasket() {
    this.basketItems = [];
    this.basketChanged.next(this.basketItems);
  }

  deleteItem(index: number) {
    this.basketItems.splice(index,1);
    this.basketChanged.next(this.basketItems);
  }
}
