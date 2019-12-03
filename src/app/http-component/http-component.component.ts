import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';
import { BadRequestError } from '../errors/bad-request-error';

// npm install @angular/http --save
// proxy.conf.json is required to avoid CORB

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.css']
})
export class HttpComponentComponent implements OnInit{
  posts: any[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService
    .getAll()
    .subscribe(posts => this.posts = posts);
  }

  addPost(input: HTMLInputElement){
    debugger
    let post = {title: input.value}
    this.posts.splice(0, 0, post);       

    input.value = '';

    this.postService.add(post)
    .subscribe(
      newPost => {
        post['id'] = newPost['id'];
      }, 
      (error: AppError) => {
        this.posts.splice(0, 1);

        if(error instanceof BadRequestError)
          alert('Bad Post, Error while adding');
        else throw error;
      }
    );
  }

  updatePost(post: any){
    // patch is used to update few fields and should be supported by server
    this.postService
      .patch({ isRead: true}, post.id)
      .subscribe(updatedPost => console.log(updatedPost)
      );
    // put is used to update the complete object
    // this.postService.updatePost(post, post.id)
    //   .subscribe(post => console.log(post)
    // );
  }

  deletePost(post: any){
    // optimistic approach where post will be deleted first and if any error then changes
    // will be rolled back
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    console.log("post deleted");

    this.postService.delete(post.id)
      .subscribe(null, (error: AppError) => {
        this.posts.splice(index, 0, post);
        console.log("operation rolled back on error");
        if(error instanceof NotFoundError)
          alert("This post has already been deleted");
        else throw error;  
      });
  }
}
