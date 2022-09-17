import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-using-components',
  templateUrl: './using-components.component.html',
  styleUrls: ['./using-components.component.css']
})
export class UsingComponentsComponent implements OnInit {

  text: string;

  constructor() {
    this.text = 'hello text component';
  }

  ngOnInit(): void {
  }

}
