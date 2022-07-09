import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Item} from "../item/item.model";
import {ShopService} from "../shop.service";
import {BasketService} from "../../basket/basket.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  id:number;
  item:Item;

  constructor(private route:ActivatedRoute, private router:Router, private shopService:ShopService, private basketService:BasketService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log("ID", this.id);
        console.log("params", params);
        this.item = this.shopService.getItem(this.id);
      }
    )
  }

  onLoadShop(){
    this.router.navigate(['/shop']);
  }

  onAddToBasket() {
    this.basketService.addItemToBasket(this.item);

  }
}
