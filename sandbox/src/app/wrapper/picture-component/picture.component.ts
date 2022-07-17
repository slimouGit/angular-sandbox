import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @Input() showMessage:boolean = false;
  @Input() message:string;
  @Input() imgTitle:string;
  @Input() imgPath:string;
  @Input() figcaption:string;
  @Input() imgWidth:string = '200';
  @Input() titleTag:string;
  @Input() altTag:string;


  constructor() { }

  ngOnInit(): void {
  }

}
