import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {

  @Input() input: string;
  @Input() label: string;
  value: string;
  error: string;

  @ViewChild('inputField') inputField: ElementRef;

  callFunction() {
    this.error = null;
    const currentValue = this.inputField.nativeElement.value;
    if (currentValue.length >= 3) {
      this.value = currentValue;
    } else {
      this.error = "Eingabe muss mindestens 3 Zeichen enthalten";
    }
  }
}
