import {Component, ElementRef, ViewChild} from '@angular/core';
import {ValidatorService} from "./validator";
import {ValidatorObject} from "./validatorInterface";

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  valid: boolean;
  error: string;
  name: string;


  constructor(private validatorService: ValidatorService) {
  }

  validateInput() {
    this.valid = true;
    this.error = "Success";
    let valdator: ValidatorObject = this.validatorService.validateInput(this.nameInput.nativeElement);
    if (!valdator.valid) {
      this.valid = valdator.valid;
      this.error = valdator.error;
    }
    console.log(this.valid);
    console.log(this.error);
  }
}
