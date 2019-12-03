import { Component} from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `<h3>
  {{course.title | uppercase}} <br/>
  {{course.students | number}} <br/>
  {{course.rating | number:'2.2-2'}} <br/>
  {{course.price | currency:'INR':'symbol':'3.2-2'}}<br/>
  {{course.releaseDate | date}}<br/>
  {{course.description | summary: 30}}
  </h3>
  `
})

export class PipesComponent {
  course = {
    title: "Angular Tutorial",
    rating: 4.9745,
    students: 20123,
    price: 190.95,
    releaseDate: new Date(2019, 12, 11),
    description: "Hello World! I am Angular and currently I am trying to use custom pipe"
  };
}
