import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
// Injectable is used so that angular compiler can include all the dependencies of this class 
// while doing a dependency injection
export class CommandlineService {

  constructor() { }
}
