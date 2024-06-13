import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss',
})
export default class ImagesComponent {}
