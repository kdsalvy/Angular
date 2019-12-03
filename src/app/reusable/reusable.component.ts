import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface ChangeEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html', // we are using templateUrl and passed all the contents of
  // template field to reusable.component.html to keep the code clean
  inputs: ['isLoved'], // 2nd way of input binding
  styleUrls: ['./reusable.component.css'],
  encapsulation: ViewEncapsulation.Emulated // this is the default value, so we don't need to mention this
})

export class ReusableComponent {
  isLoved = false;
  @Input('isFavourite') isSelected = false; // @Input is 1st way of input binding for reusable components
  // here we can use aliasing to save our code from breaking in case we change the variable name
  // but we have to manually change it in our template
  @Output('change') click = new EventEmitter(); // this is going to bind the change event and will raise a custom
  // event for the parent
  // we can use aliasing for output binding, just like we did for input binding

  favIt() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected}); // custom event is raised
  }
  loveIt() {
    this.isLoved = !this.isLoved;
    this.click.emit({ newValue: this.isSelected});
  }
}
