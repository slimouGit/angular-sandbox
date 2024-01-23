import { Component, OnInit } from '@angular/core';
import { Fruits } from '../enums/fruits';
@Component({
  selector: 'app-enums',
  templateUrl: './enums.component.html',
  styleUrls: ['./enums.component.css']
})

export class EnumsComponent implements OnInit {
  type: string;
  constructor() { }

  ngOnInit(): void {
    console.log("Type ", Fruits.Type);
    this.type = Fruits.Type;
  }

}
