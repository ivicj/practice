import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../model/album';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
    constructor(private http: HttpClient) { }

    GetAlbums = (): Observable<Album[]> => this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`);
}