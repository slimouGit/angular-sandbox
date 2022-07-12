import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-backend-communication',
  templateUrl: './backend-communication.component.html',
  styleUrls: ['./backend-communication.component.css']
})
export class BackendCommunicationComponent implements OnInit {

  dbUrl: string;
  loadedPosts:Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dbUrl = 'https://ng-sandbox-db-default-rtdb.firebaseio.com/';
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post(this.dbUrl + 'posts.json', postData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.onGetPosts();
  }

  onClearPosts() {
    // Send Http request

  }

  onGetPosts() {
    this.http.get<{[key:string]: Post}>(this.dbUrl + 'posts.json')
      .pipe(map(responseData => {
        const postArray:Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key })
          }
        }
        return postArray;
      }))
      .subscribe(posts => {
        console.log(posts);
        this.loadedPosts = posts;
      });
  }

}
