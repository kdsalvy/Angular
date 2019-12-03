import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
  <h2> {{title}} <h2>
  <img [src]="imageURL"/>
  <table>
    <tr>
      <td [attr.colspan] = "colSpan">Attribute Binding</td>
    </tr>
  </table>
  
  <button 
  [style.backgroundColor] = "isActive? 'red' : 'grey'" 
  class="btn btn-primary" 
  [class.active]="isActive"
  (click)="onClick($event)">
  Add Bootstap
  </button>

  <br/><input #templateVar (keyup.enter)="onKeyUp(templateVar.value)" />
  <br/><input [value]="input1" (keyup.enter)="onKeyUp()"/> <!-- one way property binding -->
  <br/><input [(ngModel)]="input2" (keyup.enter)="onKeyUp()"/> <!-- two way property binding -->
  ` 
  // the rectangular brackets represents property binding and is cleaner approach
  // while using it for html tag attributes 
  // colspan is html attribute not DOM attribute, so we need to specificy it using attr
  // class binding based on some condition or output of an expression using class.{attr}
  // style binding is done based on condition or output of an expression using style.{attr}
  // event binding is done by calling the method on click event enclosed in paranthesis
  // event filtering is done by adding the event instance like for keyup event filter only for enter key
  // template variable is declared using # and can be used as an alternative to pass $event object and get its target value
  // two way property binding can be implemented using [(ngModule)]
  , styles: ['img{ border-block-color: black; height: 120px; width: 110px; }']
})
export class PropertybindingComponent implements OnInit {

  title = "Property Binding";
  imageURL = "../../assets/images/AngularLogo.png"
  colSpan = 3;
  isActive = true;
  input1 = "one way binding";
  input2 = "two way binding";

  onClick($event) {
    console.log("Button was clicked");
    console.log($event);
    $event.stopPropagation(); // disable event bubbling
  }

  onKeyUp(value: string) {
    console.log("Enter key was pressed");
    console.log(value);
    console.log(this.input1);
    console.log(this.input2);
  }

  ngOnInit() {
  }

}
