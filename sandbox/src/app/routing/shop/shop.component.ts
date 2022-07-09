import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Item} from "./item/item.model";
import {ShopService} from "./shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {
  items: Item[];
  id:number;

  constructor(private router: Router, private route:ActivatedRoute, private shopService:ShopService) {
    this.items;
    this.id;
  }

  ngOnInit(): void {
    this.items = this.shopService.getItems();
    this.items.forEach(item => console.log(item.name));

    }

  onSelectItem(id:number){
    console.log("Selected item", id);
    this.id = id;
    console.log("this id", this.id);
    this.router.navigate(['basket',this.id,'add']);
  }

}
