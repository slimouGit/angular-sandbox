import {Component, Input, OnInit} from '@angular/core';
import {BehaviorService} from "../bahaviorsubject.service";

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css'],
  providers: [BehaviorService]
})
export class InputComponentComponent implements OnInit {

  inputValue:string = "";
  formIsValid:boolean = false;

  constructor(private bService:BehaviorService) { }

  ngOnInit(): void {
    this.bService.inputObsevable.subscribe((isValid:boolean) => {
      this.formIsValid=isValid?true:false;
    })
  }

  checkForm(){
    console.log(this.inputValue);
    if(this.inputValue.length>=5){
      this.bService.inputObsevable.next(true);
    }
    if(this.inputValue.length<5){
      this.bService.inputObsevable.next(false);
    }
  }

}
