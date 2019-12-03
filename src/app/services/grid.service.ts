import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GridService extends DataService{
    
    constructor(http: Http) { 
        super('https://api.myjson.com/bins/15psn9', http);
        // super('https://api.myjson.com/bins/ly7d1', http);
    }
    
}