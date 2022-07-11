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
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customInternalObservable.subscribe(data => {
        console.log(data);
        this.counter = data;
    })
  }

  unSubscripe(){
    this.firstObsSubscription.unsubscribe();
  }

}
