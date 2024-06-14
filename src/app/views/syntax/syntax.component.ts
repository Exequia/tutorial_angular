import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-syntax',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './syntax.component.html',
  styleUrl: './syntax.component.scss',
})
export default class SyntaxComponent {}
