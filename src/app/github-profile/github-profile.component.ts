import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs/Observable';
import { FollowersComponent } from '../followers/followers.component';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // subscribing to two observables separately
    console.log("Github Profile Page");
    this.route.queryParamMap
      .subscribe(queryParams => console.log("QueryParams: " + JSON.stringify(queryParams)));
    this.route.paramMap
      .subscribe(params => console.log("Params: " + JSON.stringify(params)))
  }

}
