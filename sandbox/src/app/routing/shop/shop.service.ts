import {Item} from "./item/item.model";
import {EventEmitter} from "@angular/core";

export class ShopService {
  itemsChanged = new EventEmitter<Item[]>();
  private items: Item[] = [
    new Item(0, "Milk", "1,20"),
    new Item(1, "Cheese", "2,05")
  ];

  getItems() {
    return this.items.slice();
  }

  getItem(id: number) {
    return this.items[id];
  }

  addItemToBasket(item: Item) {
    this.items.push(item);
    this.itemsChanged.emit(this.items.slice());
    console.log("changed Items", this.items);
  }
}
