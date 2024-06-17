import { Injectable, inject } from '@angular/core';
import { Item, UserApiResponse } from '../models/app.model';
import { Observable, delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly _http = inject(HttpClient);

  getUsers(): Observable<UserApiResponse[]> {
    return this._http.get<UserApiResponse[]>('https://randomuser.me/api/');
  }
}
