import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private http: HttpClient) { }

    // GetUsers(): Observable<User[]> {
    //     return this.http
    //         .get<{ items: User[] }>(
    //             'https://jsonplaceholder.typicode.com/users'
    //         )
    //         .pipe(map((users) =>
    //             users.items as User[] || []
    //         ));
    // }

    GetUsers = (): Observable<User[]> => this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
}