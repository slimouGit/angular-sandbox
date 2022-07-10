import {Component, OnInit} from '@angular/core';
import {Item} from "../shop/item/item.model";
import {BasketService} from "./basket.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  itemsInBasket:Item[];
  totalCost:number;

  constructor(private route: ActivatedRoute, private router: Router, private basketService: BasketService) { }

  ngOnInit(): void {
    this.itemsInBasket = this.basketService.getItemsInBasket();
    // this.basketService.itemsAdded.subscribe(
    //   (basketItems:Item[]) => {
    //     this.itemsInBasket = basketItems;
    //   }
    // );
    console.log("this.itemsInBasket", this.itemsInBasket);
    this.totalCost = this.basketService.getTotalCost(this.itemsInBasket);
  }

  emptyBasket() {
    this.itemsInBasket = [];
  }
}
