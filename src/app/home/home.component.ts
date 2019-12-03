import { Component, OnInit } from '@angular/core';
import { ChangeEventArgs } from '../reusable/reusable.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  post = {
    isFavourite: true,
    isLoved: true,
    title: "Title"
  }

  onFavouriteChange(changeArgs: ChangeEventArgs) {
    console.log("Favourite Changed ", changeArgs.newValue);
  }

}
