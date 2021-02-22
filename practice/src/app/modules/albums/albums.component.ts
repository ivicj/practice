import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlbumsActions, AlbumsSelectors } from 'src/app/root-store/albums-store';
import { State } from 'src/app/root-store/albums-store/albums.state';
import { Album } from '../model/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  displayedColumns: string[] = ['Title'];
  albumsList = [];
  albums$: Observable<Album[]>;

  constructor(
    private store: Store<State>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(AlbumsActions.LoadAlbumsDataRequestAction());
    this.albums$ = this.store.pipe(AlbumsSelectors.selectAlbumsData);
  }

}
