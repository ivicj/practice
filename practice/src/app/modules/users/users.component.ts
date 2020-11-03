import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Username', 'Email', 'City', 'Zipcode', 'Phone', 'Website', 'Company name'];
  usersList = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(x => {
      if (x === null || x === '' || typeof x === 'undefined') {
        return;
      }
      this.usersList = x as User[];


    }, error => console.error(error));
  }

}
