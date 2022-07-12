import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-backend-communication',
  templateUrl: './backend-communication.component.html',
  styleUrls: ['./backend-communication.component.css']
})
export class BackendCommunicationComponent implements OnInit {


  loadedPosts: Post[] = [];
  isFetching = false;


  constructor(private postService: PostService) { }

  ngOnInit() {
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
    });
  }

}
