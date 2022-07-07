import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-emit-child',
  templateUrl: './emit-child.component.html',
  styleUrls: ['./emit-child.component.css']
})
export class EmitChildComponent  {
  helloToParent:string = '';
  @Output() greetingEvent = new EventEmitter<string>();

  greetingParentInFunctionFromChild(hello:string){
    this.greetingEvent.emit(hello);
  }

}
