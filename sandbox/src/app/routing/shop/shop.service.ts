import {Item} from "./item/item.model";
import {EventEmitter, Injectable} from "@angular/core";
import {BasketService} from "../basket/basket.service";
import {Router} from "@angular/router";

@Injectable()
export class ShopService {
  itemsChanged = new EventEmitter<Item[]>();
  private items: Item[] = [
    new Item(0, "Milk", 1.2),
    new Item(1, "Cheese", 2.05)
  ];

  constructor(private basketService: BasketService, private router: Router) {
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

  showItem(itemNumber: number): string {
    const foundItem = this.items.find(i => {
      return i.id === itemNumber
    })
    if (foundItem) return 'view/' + itemNumber;
    if (!foundItem) return '';
  }
}
