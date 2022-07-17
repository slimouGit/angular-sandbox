import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() showMessage:boolean = false;
  @Input() message:string;
  @Input() imgTitle:string;
  @Input() imgPath:string;
  @Input() figcaption:string;

  constructor() { }

  ngOnInit(): void {
  }

}
