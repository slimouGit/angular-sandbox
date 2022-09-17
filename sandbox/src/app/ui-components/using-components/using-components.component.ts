import {Component} from '@angular/core';

@Component({
  selector: 'app-using-components',
  templateUrl: './using-components.component.html',
  styleUrls: ['./using-components.component.css']
})
export class UsingComponentsComponent {

  text: string;
  headline: string;
  inputIdentifierFromUsingComponent: string;
  labelFromUsingComponent: string;

  constructor() {
    this.text = 'hello text component';
    this.headline = 'I am a Headline';

    this.inputIdentifierFromUsingComponent = "dinamic identifier"
    this.labelFromUsingComponent = "dinamic label"
  }

}
