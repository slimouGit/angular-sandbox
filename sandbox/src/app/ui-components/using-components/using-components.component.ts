import {Component} from '@angular/core';
import {InputFields} from "../input-field/inputfields";

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
  public inputFields: InputFields[];


  constructor() {
    this.text = 'hello text component';
    this.headline = 'I am a Headline';

    this.inputIdentifierFromUsingComponent = "dinamic identifier"
    this.labelFromUsingComponent = "dinamic label"
    this.inputFields = [
      {inputIdentifier: 'phone', label: 'Phone', error: 'Enter valid phone number', regex: /^[a-zA-Z]{3}/},
      {
        inputIdentifier: 'email',
        label: 'Email',
        error: 'Enter valid email',
        regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      },
      {inputIdentifier: 'street', label: 'Street', error: 'Enter valid street', regex: /^[a-zA-Z]{3}/},
    ];
  }

}
