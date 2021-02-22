import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from '../model/user';
import { Store, select } from '@ngrx/store';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { State } from '../../root-store/users-store/users.state';
import { UsersActions, UsersSelectors } from 'src/app/root-store/users-store';
import { Post } from '../model/post';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostsComponent } from '../posts/posts.component';
import { IPostsModalData } from '../interfaces/IPostsModalData';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  displayedColumns: string[] = ['Name', 'Username', 'Email', 'City', 'Zipcode', 'Phone', 'Website', 'Company name'];
  users$: Observable<User[]>
  postsModalData: IPostsModalData;

  constructor(
    private store: Store<State>,
    // public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.LoadUsersDataRequestAction());
    this.users$ = this.store.pipe(UsersSelectors.selectUsersData);
  }

  getPosts(row) {
    // this.postsModalData = { id: row.id}
    // const diaogRef = this.dialog.open(PostsComponent, { minWidth: '70rem', maxWidth: '70rem', data: this.postsModalData });
    // diaogRef.afterClosed().subscribe(result => {
    //   if(result === undefined)
    //     return;
    // });
    this.router.navigate(['view-posts', row.id], { relativeTo: this.activatedRoute.parent });
  }

}
