import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { dragonBallCharacters } from '../../../assets/data/app.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-image-native',
  standalone: true,
  imports: [NgOptimizedImage, TranslateModule],
  templateUrl: './image-native.component.html',
  styleUrl: './image-native.component.scss',
})
export default class ImageNativeComponent {
  dragonBallCharacter = dragonBallCharacters;
}
