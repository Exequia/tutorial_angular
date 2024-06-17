import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-deferrable',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './deferrable.component.html',
  styleUrl: './deferrable.component.scss',
})
export default class DeferrableComponent {}
