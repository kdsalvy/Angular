import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent extends DataService implements OnInit{

  followers: any[];

  constructor(http: Http, private route: ActivatedRoute){
    super('https://api.github.com/users/kdsalvy/followers', http);
    // let pageParam = this.route.snapshot.queryParamMap.get('page');
    // console.log("Page: " + pageParam); 
  }
  
  ngOnInit(): void {
    console.log("Get Followers Page");

    this.route.queryParamMap
    .subscribe(queryParams => console.log("QueryParams: " + JSON.stringify(queryParams)));
    this.route.paramMap
    .subscribe(params => console.log("Params: " + JSON.stringify(params)))

    // combining two observables to subscribe to both at once
    Observable.combineLatest([
      this.route.queryParamMap,
      this.route.paramMap
    ])
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      return this.getAll();
    })
    .subscribe( followers => this.followers = followers);
    
    // once we have id we can call service to get follower detail   
    this.getAll().subscribe( responseJSON => {
      this.followers = responseJSON;
    });
  }

}
