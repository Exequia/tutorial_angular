import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Item } from '../../models/app.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-change-detector',
  standalone: true,
  imports: [TranslateModule, JsonPipe],
  templateUrl: './change-detector.component.html',
  styleUrl: './change-detector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectorComponent {
  item: Item = { id: 1, name: 'Item 1', quantity: 1 };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.item.quantity = 666;
      console.log(
        'ChangeDetectorComponent - ngOnInit - item.quantity:',
        this.item.quantity
      );
      // this.cdr.detectChanges();
    }, 2000);
  }
}
