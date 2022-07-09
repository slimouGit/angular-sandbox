import {Item} from "./item/item.model";

export class ShopService {
  private items: Item[] = [
    new Item(1, "Milk", "1,20"),
    new Item(2, "Cheese", "2,05")
  ];

  getItems() {
    return this.items.slice();
  }

  getItem(id: number) {
    return this.items[id];
  }

}
