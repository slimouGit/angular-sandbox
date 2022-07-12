import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs";
import { Subject, throwError } from "rxjs";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService{

    dbUrl: string;
    error = new Subject();

    constructor(private http: HttpClient){ 
        this.dbUrl = 'https://ng-sandbox-db-default-rtdb.firebaseio.com/';
    }

    createAndStorePost(title: string, content:string){
        const postData: Post = { title: title, content:content };
        this.http.post(this.dbUrl + 'posts.json', postData).subscribe(responseData => {
            console.log(responseData);
            
          }, error => this.error.next(error.message));
    }

    fetchPosts(){
        return this.http.get<{[key:string]: Post}>(this.dbUrl + 'posts.json')
      .pipe(map(responseData => {
        const postArray:Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key })
          }
        }
        return postArray;
      }), catchError(errorRes => {
            return throwError(errorRes);
      })
      );
    }
    
    onDeletePosts(){
        return this.http.delete(this.dbUrl + 'posts.json');
    }
}