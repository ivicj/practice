import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PostsActions, PostsSelectors } from 'src/app/root-store/posts-store';
import { State } from 'src/app/root-store/posts-store/posts.state';
import { IPostsModalData } from '../interfaces/IPostsModalData';
import { Post } from '../model/post';
import { PostsForStoreModel } from '../model/posts-for-store.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Title', 'Body', 'Actions'];
  postsList: Post[] = [];
  userId: number;
  posts$: Observable<PostsForStoreModel[]>;
  dataSource = new MatTableDataSource<Post>();
  isExpanded = false;
  isTableExpanded = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => {
        if (params.id) {
          this.store.dispatch(PostsActions.LoadPostsByUserIdDataRequestAction({ userId: params.id }))
          return this.store.pipe(PostsSelectors.selectPostsByUserIdData(params.id))
        } else {
          this.store.dispatch(PostsActions.LoadPostsDataRequestAction())
          return this.store.pipe(PostsSelectors.selectPostsData)
        }
      }),
      tap(posts => {

        // const k = posts.map(post => post.posts.map(p => [{
        //   userId: p.userId,
        //   title: p.title,
        //   body: p.body,
        //   id: p.id
        // }]))
        // console.log(typeof k)
        posts.forEach(post => post.posts.forEach(post => {
          this.dataSource.data.push(post)
        }))

        this.addPropIsExpanded(this.dataSource.data);
      }

      )
    ).subscribe()
  }

  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;
    this.dataSource.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }

  addPropIsExpanded (posts: Post[]) {
    posts.forEach(post => post['isExpanded'] = false);
  }

}
