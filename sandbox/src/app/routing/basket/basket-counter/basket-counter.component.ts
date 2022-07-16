import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasketService} from "../basket.service";
import {Subscription} from "rxjs";
import {Item} from "../../shop/item/item.model";

@Component({
  selector: 'app-basket-counter',
  templateUrl: './basket-counter.component.html',
  styleUrls: ['./basket-counter.component.css']
})
export class BasketCounterComponent implements OnInit, OnDestroy {

  basketCounter:number;
  subscription:Subscription;
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    this.subscription = this.basketService.basketChanged.subscribe(
      (itemsInBasket:Item[]) => {
        this.basketCounter = itemsInBasket.length;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
