import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

@ViewChild('f') signUpForm: NgForm;
comment:string;
genders = ['male', 'female'];

user = {
  forname: '',
  lastname: '',
  email: '',
  comment: '',
  gender: ''
}

submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
  onSubmit(form: NgForm){
    console.log(form);
  }
  */

  onSubmit(){
    this.submitted = true;
    console.log(this.signUpForm);
    this.user.forname = this.signUpForm.value.userData.forname;
    this.user.lastname = this.signUpForm.value.userData.lastname;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.comment = this.signUpForm.value.comment;
    this.user.gender = this.signUpForm.value.gender;
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

  resetForm(){
    this.signUpForm.reset();
  }
}
