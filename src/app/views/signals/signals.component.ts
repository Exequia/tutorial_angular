import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export default class SignalsComponent {}
