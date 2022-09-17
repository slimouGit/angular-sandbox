import {Component} from '@angular/core';

@Component({
  selector: 'app-using-components',
  templateUrl: './using-components.component.html',
  styleUrls: ['./using-components.component.css']
})
export class UsingComponentsComponent {

  text: string;
  headline: string;

  constructor() {
    this.text = 'hello text component';
    this.headline = 'I am a Headline';
  }

}
