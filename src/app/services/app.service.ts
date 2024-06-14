import { Injectable } from '@angular/core';
import { Item } from '../models/app.model';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getDummyItem(): Observable<Item> {
    return of({ id: 1, name: 'Item 1', quantity: 1 }).pipe(
      delay(2000) // Simulamos un retardo de 2 segundos
    );
  }
}
