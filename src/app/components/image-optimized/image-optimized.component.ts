import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { dragonBallCharacters } from '../../../assets/data/app.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-image-optimized',
  standalone: true,
  imports: [NgOptimizedImage, TranslateModule],
  templateUrl: './image-optimized.component.html',
  styleUrl: './image-optimized.component.scss',
})
export default class ImageOptimizedComponent {
  dragonBallCharacter = dragonBallCharacters;
}
