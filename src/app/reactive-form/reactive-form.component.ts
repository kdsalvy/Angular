import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './custom.validators';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class SignupFormComponent {

  // we can use any of the two ways to create a reactive form, either by creating directly in the field
  // or by using form builder in constructor

  // form = new FormGroup({
  //   account: new FormGroup({
  //     username: new FormControl('', 
  //     [
  //       Validators.required, 
  //       UsernameValidators.cannotContainSpace,
  //     ],
  //     UsernameValidators.shouldBeUnique),
  //     password: new FormControl('', [Validators.required, Validators.minLength(6)])
  //   }),
  //   hobbies: new FormArray([])
  // });
  form: FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      account: fb.group({
        username: fb.control('', 
        [
          Validators.required, 
          UsernameValidators.cannotContainSpace,
        ],
        UsernameValidators.shouldBeUnique),
        password: fb.control('', 
        [
          Validators.required, 
          Validators.minLength(6)
        ])
      }),
      hobbies: fb.array([])
    });
  }

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }

  addElement(hobby: HTMLInputElement){
    this.hobbies.push(new FormControl(hobby.value));
  }

  removeElement(hobby: FormControl) {
    let index = this.hobbies.controls.indexOf(hobby);
    this.hobbies.removeAt(index);
  }

  get username() { 
    return this.form.get('account.username');
  }

  get password() { 
    return this.form.get('account.password');
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }
}
