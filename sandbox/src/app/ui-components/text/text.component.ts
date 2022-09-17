import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() text: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}