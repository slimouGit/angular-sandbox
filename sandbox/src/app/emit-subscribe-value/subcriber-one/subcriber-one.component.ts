import {Component, OnInit} from '@angular/core';
import {EmitSubscribeValueService} from "../emit-subscribe-value.service";

@Component({
  selector: 'app-subcriber-one',
  templateUrl: './subcriber-one.component.html',
  styleUrls: ['./subcriber-one.component.css']
})
export class SubcriberOneComponent implements OnInit {

  public recievedValueOne: string;

  constructor(private emitSubscribeValueService: EmitSubscribeValueService) {
  }

  ngOnInit(): void {
    this.emitSubscribeValueService.emitValue.subscribe(value => {
      this.recievedValueOne = value
    });
  }

}
