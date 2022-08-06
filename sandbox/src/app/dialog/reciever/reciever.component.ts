import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SenderService} from "../sender/sender.service";
import {Chapter} from "../shared/Chapter";

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit {
  chapter:Chapter;
  constructor(private senderService: SenderService) {
  }

  ngOnInit(): void {
    this.senderService.helloEmitter.subscribe(chapter => {
      this.recieveMessage(chapter);
      ;
    });
  }

  private recieveMessage(chapter) {
    this.chapter = chapter;
    alert(chapter.chapter + " " + chapter.group);
  }
}
