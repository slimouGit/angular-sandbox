import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-communication',
  templateUrl: './backend-communication.component.html',
  styleUrls: ['./backend-communication.component.css']
})
export class BackendCommunicationComponent implements OnInit {

  dbUrl:string;
  loadedPosts = [];
 
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.dbUrl = 'https://ng-sandbox-db-default-rtdb.firebaseio.com/';
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(this.dbUrl+'posts.json', postData).subscribe(responseData => {
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

  onGetPosts(){
    this.http.get(this.dbUrl+'posts.json').subscribe(posts => console.log(posts));
  }

}
