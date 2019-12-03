import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempate-form',
  templateUrl: './tempate-form.component.html',
  styleUrls: ['./tempate-form.component.css']
})
export class TempateFormComponent implements OnInit {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ]

  constructor() { }

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }

  submit(f){
    console.log(f.value); // contains all the data of the form which can be sent to a backend api
  }
}
