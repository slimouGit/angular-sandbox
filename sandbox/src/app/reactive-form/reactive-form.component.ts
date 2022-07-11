import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenFornames = ['Michaela', 'Salim'];


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'forname': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'lastname': new FormControl(null, Validators.required)
      }),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbies(): FormArray {
    return this.signupForm.get('hobbies') as FormArray;
  }

  forbiddenNames(control: FormControl):{[s:string]:boolean}{
      if(this.forbiddenFornames.indexOf(control.value) !== -1){
        return {'nameIsForbidden': true};
      }
      return null;
  }


}
