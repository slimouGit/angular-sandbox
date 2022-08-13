import {Component} from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {

  amount: number;
  result: string;

  constructor() {
  }

  checkNumber() {
    this.callFunction(this.amount).then(
      (val) => console.log(val),
      (err) => console.error(err)
    );
  }

  callFunction(amount: number) {
    let error = this.doSomething(amount);
    console.log(this.amount);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          this.result = "Not so good";
          reject('error');
        } else {
          this.result = "Very good good";
          resolve('done');
        }
      }, 1000);
    });
  }

  doSomething(x: number) {
    if (x < 42) {
      return new Error('Oh no!');
    }
  }
}




