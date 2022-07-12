import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-backend-communication',
  templateUrl: './backend-communication.component.html',
  styleUrls: ['./backend-communication.component.css']
})
export class BackendCommunicationComponent implements OnInit, OnDestroy {


  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })
    this.onGetPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.postService.createAndStorePost(postData.title, postData.content);

  }

  onFetchPosts() {
    this.onGetPosts();
  }

  onClearPosts() {
    this.postService.onDeletePosts().subscribe(() => {
      this.loadedPosts = [];
    });

  }

  onGetPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    });
  }

  onSelectPost(index:number){
    console.log("Post selected ", this.loadedPosts[index]);
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

}
