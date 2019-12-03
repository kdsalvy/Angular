import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import { DataService } from './data.service';

// npm install --save rxjs-compat

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: Http) { 
    super('http://jsonplaceholder.typicode.com/posts', http);
  }
}
