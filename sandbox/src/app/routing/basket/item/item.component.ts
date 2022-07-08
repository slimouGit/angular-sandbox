import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: { id: number, name: string };
  

  constructor(private route: ActivatedRoute, private basketService : BasketService) { 
    this.item = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.item.id = params['id'];
        this.item.name = params['name'];
      }
    );

    
  }

}
