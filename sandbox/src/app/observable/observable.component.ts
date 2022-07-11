import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  private firstObsSubscription: Subscription;
  counter: number;

  constructor() { }

  ngOnInit(): void {
    const customInternalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=> {
        observer.next(count);
        if(count>5){
          observer.error(new Error('Count is greater 5!'));          
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customInternalObservable.subscribe(data => {
        console.log(data);
        this.counter = data;
    }, error => {
        console.log(error);
        alert(error.message);
    })
  }

  unSubscripe(){
    this.firstObsSubscription.unsubscribe();
  }

}
