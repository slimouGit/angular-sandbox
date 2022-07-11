import { Component,Output,EventEmitter, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ParentService } from '../parent-service';

@Component({
  selector: 'app-emit-child',
  templateUrl: './emit-child.component.html',
  styleUrls: ['./emit-child.component.css']
})
export class EmitChildComponent implements OnInit, OnDestroy  {
  helloToParent:string = '';
  @Output() greetingEvent = new EventEmitter<string>();

  haveToGoToBedNow = false;
  private goToBedSub: Subscription;

  constructor(private parentService:ParentService){}

  greetingParentInFunctionFromChild(hello:string){
    this.greetingEvent.emit(hello);
  }

  ngOnInit() {
    this.goToBedSub = this.parentService.sendToBedEmitter.subscribe(didParentSentChildToBed => {
      this.haveToGoToBedNow = didParentSentChildToBed;
    });
  }

  ngOnDestroy(): void {
    this.goToBedSub.unsubscribe();
  }

}
