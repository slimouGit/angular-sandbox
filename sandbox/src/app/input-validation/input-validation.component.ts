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
    let valdator: ValidatorObject = this.validatorService.validateInput(this.name, this.nameInput.nativeElement.id);
    if (!valdator.valid) {
      console.log(valdator.error);
    }
  }
}
