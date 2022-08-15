import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from "./item/item.model";
import {ShopService} from "./shop.service";
import {BasketService} from "../basket/basket.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: Item[];
  id: number;
  itemNumber: number;

  constructor(private router: Router, private route: ActivatedRoute, private shopService: ShopService, private basketService: BasketService) {
    this.items;
    this.id;
    this.getIdFromUrl("auftrag/42/uebersicht");
  }

  ngOnInit(): void {
    this.items = this.shopService.getItems();
    this.items.forEach(item => console.log(item.name));
  }

  onSelectItem(id: number) {
    console.log("Selected item", id);
    this.id = id;
    console.log("this id", this.id);
    const url = `/view/${this.id}`;
    this.router.navigateByUrl(url);
  }

  onAddToBasket(item: Item) {
    console.log(item.name);
    this.shopService.addItemToBasket(item);
  }

  showItem() {
    const target = this.shopService.showItem(this.itemNumber);
    this.router.navigate([target]);
  }

  private getIdFromUrl(url: string) {
    const id = url.slice(
      url.indexOf('g/') + 2,
      url.lastIndexOf('/'),
    );
    console.log("id from url: ", id);
  }
}
