import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-dependencyinjection',
  template: `
  <h2> Dependency Injection </h2>
  <ul>
    <li *ngFor="let course of courses">{{course}}</li>
  </ul>  
  `
})
export class DependencyinjectionComponent implements OnInit {
  courses: string[];

  constructor(service: CoursesService) { 
    this.courses = service.getSources();
  }

  ngOnInit() {
  }

}
