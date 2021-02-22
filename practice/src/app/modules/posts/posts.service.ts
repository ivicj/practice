import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../model/post';

@Injectable({ providedIn: 'root' })
export class PostsService {
    constructor(private http: HttpClient) { }

    GetPosts = (): Observable<Post[]> => this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
    GetPostsByUserId = (userId: number): Observable<Post[]> => this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
}