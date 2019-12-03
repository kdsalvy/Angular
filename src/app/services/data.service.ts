import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';
import { BadRequestError } from '../errors/bad-request-error';

// npm install --save rxjs-compat

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http
    .get(this.url)
    .map( response => response.json())
    .catch(this.handleError);
  }

  add(resource: any) {
    // return Observable.throw(new AppError());

    return this.http
      .post(this.url, JSON.stringify(resource))
      .map( response => response.json())
      .catch(this.handleError)
  }

  update(resource: any, id: number) {
    return this.http
      .patch(this.url + '/' + id, JSON.stringify(resource))
      .map( response => response.json())
      .catch(this.handleError);
  }

  patch(resource: any, id: number) {
    return this.http
      .patch(this.url + '/' + id, JSON.stringify(resource))
      .map( response => response.json())
      .catch(this.handleError);
  }

  delete(id: number){
    // return Observable.throw(new AppError());

    return this.http
      .delete(this.url + '/' + id)
      .map( response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if(error.status == 404)
      return Observable.throw(new NotFoundError());
    if(error.status == 400)
      return Observable.throw(new BadRequestError());
    return Observable.throw(new AppError(error));
  }
}
