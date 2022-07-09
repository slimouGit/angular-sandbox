import {Item} from "./item/item.model";
import {EventEmitter, Injectable} from "@angular/core";
import {BasketService} from "../basket/basket.service";

@Injectable()
export class ShopService {
  itemsChanged = new EventEmitter<Item[]>();
  private items: Item[] = [
    new Item(0, "Milk", "1,20"),
    new Item(1, "Cheese", "2,05")
  ];

  constructor(private basketService: BasketService) {
  }

  getItems() {
    return this.items.slice();
  }

  getItem(id: number) {
    return this.items[id];
  }

  addItemToBasket(item: Item) {
    this.basketService.addItemToBasket(item);
  }

}
