import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Body'];
  postsList = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(x => {
      if (x === null || x === '' || typeof x === 'undefined') {
        return;
      }
      this.postsList = x as Post[];


    }, error => console.error(error));
  }

}
