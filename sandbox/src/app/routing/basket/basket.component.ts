import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Item} from "../shop/item/item.model";
import {BasketService} from "./basket.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  itemsInBasket:Item[];

  constructor(private route: ActivatedRoute, private router: Router, private basketService: BasketService) { }

  ngOnInit(): void {
    this.itemsInBasket = this.basketService.getItemsInBasket();
    // this.basketService.itemsAdded.subscribe(
    //   (basketItems:Item[]) => {
    //     this.itemsInBasket = basketItems;
    //   }
    // );
    console.log("this.itemsInBasket", this.itemsInBasket);
  }

  emptyBasket() {
    this.itemsInBasket = [];
  }
}
