import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from '../model/user';
import { Store, select } from '@ngrx/store';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { State } from '../../root-store/users-store/users.state';
import { UsersActions, UsersSelectors } from 'src/app/root-store/users-store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>
  users;
  displayedColumns: string[] = ['Name', 'Username', 'Email', 'City', 'Zipcode', 'Phone', 'Website', 'Company name'];
  usersList = [];

  constructor(
    private store: Store<State>,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    // this.users = this.store.pipe(select(selectUsers));
    this.store.dispatch(UsersActions.LoadUsersDataRequestAction());
    this.users$ = this.store.pipe(UsersSelectors.selectUsersData);





    // this.getUsers();
  }

  // getUsers() {
  //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(x => {
  //     if (x === null || x === '' || typeof x === 'undefined') {
  //       return;
  //     }
  //     this.usersList = x as User[];


  //   }, error => console.error(error));
  // }

}
