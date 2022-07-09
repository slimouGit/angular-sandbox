import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Item} from "../shop/item/item.model";
import {ShopService} from "../shop/shop.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  providers: [ShopService]
})
export class BasketComponent implements OnInit {
  id: number;
  item: Item;

  itemsInBasket:Item[];

  constructor(private route: ActivatedRoute, private router: Router, private shopService: ShopService) {

  }

  ngOnInit(): void {
    console.log(this.router.url);
    console.log(this.route.queryParams);

    this.shopService.itemsChanged.subscribe(
      (items:Item[]) => {
        this.itemsInBasket = items;
      }
    );

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log("ID", this.id);
        console.log("params", params);

      }
    )
    this.collectItems(this.id);


  }

  private collectItems(id: number) {
    this.item = this.shopService.getItem(id);
    console.log("item in basket ", this.item.name);
    this.shopService.addItemToBasket(this.item);
  }

}
