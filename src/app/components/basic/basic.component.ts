import { NgOptimizedImage } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PlaceholderComponent } from '../placeholder/placeholder.component';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [TranslateModule, FormsModule, PlaceholderComponent],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export default class BasicComponent {
  placeholder = model<boolean>(false);
}
