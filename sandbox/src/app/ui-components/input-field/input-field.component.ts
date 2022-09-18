import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {

  @Input() inputIdentifier: string;
  @Input() label: string;
  @Input() error: string;
  value: string;
  invalid: boolean;

  @ViewChild('inputField') inputField: ElementRef;

  validateInput() {
    this.invalid = false;
    const currentValue = this.inputField.nativeElement.value;
    if (currentValue.length >= 3) {
      this.value = currentValue;
    } else {
      this.invalid = true;
      this.value = null;
    }
  }
}
