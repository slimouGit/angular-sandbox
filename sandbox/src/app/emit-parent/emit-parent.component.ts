import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-emit-parent',
  templateUrl: './emit-parent.component.html',
  styleUrls: ['./emit-parent.component.css']
})
export class EmitParentComponent  {

  @Input() greetigFromChild:string = '';

  receiveGreetingFromFunctionInParent(hello:string){
    this.greetigFromChild = hello;
  }

}
