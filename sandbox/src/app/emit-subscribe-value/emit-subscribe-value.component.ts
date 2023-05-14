import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmitSubscribeValueService} from "./emit-subscribe-value.service";

@Component({
  selector: 'app-emit-subscribe-value',
  templateUrl: './emit-subscribe-value.component.html',
  styleUrls: ['./emit-subscribe-value.component.css']
})
export class EmitSubscribeValueComponent implements OnInit {

  myValue: string;
  @Output()
  emitValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private emitSubscribeValueService: EmitSubscribeValueService) {
  }

  ngOnInit(): void {
  }

  recieveInput() {
    this.emitSubscribeValueService.recieveInput(this.myValue);
  }

}
