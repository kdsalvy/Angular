import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamictemplate',
  template: '<h2>{{ title }}</h2><h3>{{ getTitle() }}'
})
export class DynamictemplateComponent {
    title = `Dynamic Template`;

    getTitle(){
      return this.title;
    }
}
