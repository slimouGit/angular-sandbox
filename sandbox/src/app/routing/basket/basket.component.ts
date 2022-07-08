import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from './basket.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  providers: [BasketService]
})
export class BasketComponent implements OnInit {

  constructor(private route:ActivatedRoute, private basketService : BasketService) {
  }

  items = this.basketService.getItems();  

  ngOnInit(): void {
    
  }

}
