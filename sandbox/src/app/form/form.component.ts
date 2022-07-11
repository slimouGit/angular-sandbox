import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

@ViewChild('f') signUpForm: NgForm;
answer:string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
  onSubmit(form: NgForm){
    console.log(form);
  }
  */

  onSubmit(){
    console.log(this.signUpForm);
  }

}
