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
    this.initializeBasket();
  }

  emptyBasket() {
    this.basketService.emptyBasket();
    this.initializeBasket();
    // this.router.navigate(['/shop']);
  }

  deleteItem(index:number){
    this.basketService.deleteItem(index);
    this.initializeBasket();
  }

  private loadItems() {
    this.itemsInBasket = this.basketService.getItemsInBasket();
  }

  private calculateTotalCosts() {
    this.totalCost = this.basketService.getTotalCost(this.itemsInBasket);
  }

  private initializeBasket() {
    this.loadItems();
    this.calculateTotalCosts();
  }
}
