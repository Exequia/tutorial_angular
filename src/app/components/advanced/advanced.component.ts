import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppService } from '../../services/app.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { PlaceholderComponent } from '../placeholder/placeholder.component';

@Component({
  selector: 'app-advanced',
  standalone: true,
  imports: [TranslateModule, AsyncPipe, JsonPipe, PlaceholderComponent],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.scss',
})
export default class AdvancedComponent {
  private readonly _appService = inject(AppService);
  users$ = this._appService.getUsers();
}
