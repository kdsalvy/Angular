import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent implements OnInit {

  courses = [];
  viewMode: string;
  canSave = true;
  task={
    taskName: "Task-1",
    assignee: {
      name: "KD"
    }
  }

  ngOnInit() {
  }

  onAdd(){
    this.courses.push("course-5");
  }

  onRemove(index: number){
    this.courses.splice(index, 1);
  }

  loadCourses(){
    this.courses = ["course", "course", "course", "course", "course"];
  }

  trackCourse(index: number, course: string){
    return course? course : undefined;
  }
}
