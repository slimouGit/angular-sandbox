import {Component, OnInit} from '@angular/core';
import {EmitSubscribeValueService} from "../emit-subscribe-value.service";

@Component({
  selector: 'app-subcriber-two',
  templateUrl: './subcriber-two.component.html',
  styleUrls: ['./subcriber-two.component.css']
})
export class SubcriberTwoComponent implements OnInit {

  public recievedValueTwo: string;

  constructor(private emitSubscribeValueService: EmitSubscribeValueService) {
  }

  ngOnInit(): void {
    this.emitSubscribeValueService.emitValue.subscribe(value => {
      this.recievedValueTwo = value
    });
  }

}
