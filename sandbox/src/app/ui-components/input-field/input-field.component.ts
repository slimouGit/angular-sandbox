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

  @ViewChild('nameInput') nameInput: ElementRef;

  callFunction() {
    this.value = this.nameInput.nativeElement.value;
  }
}
