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
genders = ['male', 'female'];

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


  suggestEmail(){
    const suggestedEmail = "MaxPower@Force.com";
    /**
    this.signUpForm.setValue({
        userData: {
          email: suggestedEmail, 
          forname: '',
          lastname: '',
          questionAnswer: '',
          gender: 'male'
        }
    });
   */
   this.signUpForm.form.patchValue({
      userData: {
        email: suggestedEmail
      }
    });
     
  }
}
