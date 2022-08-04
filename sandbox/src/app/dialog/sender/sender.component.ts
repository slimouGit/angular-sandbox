import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {SenderService} from "./sender.service";

interface Chapter {
  group: number;
  chapter: number;
}

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {


  constructor(private senderService:SenderService) { }

  ngOnInit(): void {
  }

  subjectReviever() {
    let target: Chapter = {group:42, chapter:0};
    this.senderService.helloEmitter.next(target);
  }
}
