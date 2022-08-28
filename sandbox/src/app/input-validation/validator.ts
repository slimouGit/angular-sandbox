import {Injectable} from "@angular/core";
import {ValidatorObject} from "./validatorInterface";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  valid: boolean;
  error: string;

  validateInput(input: any): ValidatorObject {
    if (input.id.includes('name')) {
      this.valid = input.value.length > 2;
      if (!this.valid) {
        this.error = "Error in name";
      }
    }
    return {error: this.error, valid: this.valid};
  }
}
