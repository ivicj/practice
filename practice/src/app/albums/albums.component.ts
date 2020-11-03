import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album';

const ALBUMS_DATA: Album[] = [
  {
    userId: 1,
    id: 1,
    title: 'asd'
  },
  {
    userId: 1,
    id: 2,
    title: 'asd'
  }
];

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  displayedColumns: string[] = ['Title'];
  albumsList = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(x => {
      if (x === null || x === '' || typeof x === 'undefined') {
        return;
      }
      this.albumsList = x as Album[];

    }, error => console.error(error));
  }

}
