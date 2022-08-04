import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SenderService} from "../sender/sender.service";

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit {

  private target;
  private helloSub: Subscription;

  constructor(private senderService:SenderService) { }

  ngOnInit(): void {
    this.helloSub = this.senderService.helloEmitter.subscribe(obj => {
      this.target = obj;
      this.recieveMessage(this.target);
      ;
    });
  }

  private recieveMessage(target) {
    alert(target.chapter + " " + target.group);
  }
}
