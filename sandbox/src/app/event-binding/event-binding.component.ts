import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  message:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  cookBacon(){
    console.log("cook bacon")
    this.message = 'your bacon is cooking';
  }

}
