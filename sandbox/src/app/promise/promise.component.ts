import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    this.callFunction().then(
      (val) => console.log(val),
      (err) => console.error(err)
    );    

  }
  callFunction() {
    let error = this.doSomething(40);
    return new Promise((resolve, reject) => {      
      setTimeout(() => {
        if (error) {
          reject('error'); 
        } else {
          resolve('done'); 
        }
      }, 1000);
    });
}

doSomething(x:number) {
  if(x<42){
    return new Error('Oh no!');
  }  
}
}




