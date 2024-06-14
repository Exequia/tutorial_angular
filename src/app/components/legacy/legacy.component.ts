import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Item } from '../../models/app.model';

@Component({
  selector: 'app-legacy',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './legacy.component.html',
  styleUrl: './legacy.component.scss',
})
export default class LegacyComponent {
  isLoggedIn: boolean = true;
  items: Item[] = [
    { id: 1, name: 'Item 1', quantity: 10 },
    { id: 1, name: 'Item 2', quantity: 20 },
    { id: 1, name: 'Item 3', quantity: 30 },
  ];
  userRole: string = 'admin';
  challenge: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
