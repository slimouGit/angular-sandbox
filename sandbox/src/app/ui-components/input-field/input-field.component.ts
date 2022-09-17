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

  @ViewChild('nameInput') nameInput: ElementRef;

  callFunction() {
    this.error = null;
    const currentValue = this.nameInput.nativeElement.value;
    if (currentValue.length >= 3) {
      this.value = this.nameInput.nativeElement.value;
    } else {
      this.error = "Eingabe muss mindestens 3 Zeichen enthalten";
    }
  }
}
