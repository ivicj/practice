import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { Comment } from '../model/comment';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() post: any;
  comments$: Observable<Comment[]>;
  displayedColumns = ['Id', 'Name', 'Email', 'Body'];
  comments: Comment[];
  dataSource = new MatTableDataSource<Comment>();

  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    this.getComments(this.post.id)
    .pipe(tap(x => {
      this.dataSource.data = x as Comment[];
    }))
    .subscribe();
  }

  getComments(postId: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

}
