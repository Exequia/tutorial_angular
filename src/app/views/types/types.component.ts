import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './types.component.html',
  styleUrl: './types.component.scss',
})
export default class TypesComponent {}
