import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
})
export class PlaceholderComponent {
  placeholderImgSrc = '/assets/img/placeholder.png';
}
