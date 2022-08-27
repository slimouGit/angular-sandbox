import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  valid: boolean;
  error: string;

  validateInput(value: string, id: string) {
    if (id.includes('name')) {
      this.valid = value.length > 2;
      if (!this.valid) {
        this.error = "Error";
      }
    }
    return {error: this.error, valid: this.valid};
  }
}
