import { Component } from '@angular/core';
import { ChangeEventArgs } from './reusable/reusable.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Hello-World';
  // post = {
  //   isFavourite: true,
  //   isLoved: true,
  //   title: "Title"
  // }

  // onFavouriteChange(changeArgs: ChangeEventArgs) {
  //   console.log("Favourite Changed ", changeArgs.newValue);
  // }
}
