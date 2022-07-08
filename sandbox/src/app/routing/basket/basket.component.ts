import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'Milk'
    },
    {
      id: 2,
      name: 'Banana'
    },
    {
      id: 3,
      name: 'Strawberry'
    }
  ];

  constructor(private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    
  }

}
