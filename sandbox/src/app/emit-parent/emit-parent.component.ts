import { Component,Input } from '@angular/core';
import { ParentService } from './parent-service';

@Component({
  selector: 'app-emit-parent',
  templateUrl: './emit-parent.component.html',
  styleUrls: ['./emit-parent.component.css']
})
export class EmitParentComponent  {

  @Input() greetigFromChild:string = '';

  constructor(private parentService: ParentService){}

  receiveGreetingFromFunctionInParent(hello:string){
    this.greetigFromChild = hello;
  }

  sendChildToBed(){
    this.parentService.sendToBedEmitter.next(true);
  }

}
