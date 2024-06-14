import { CurrencyPipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  effect,
  model,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Item } from '../../models/app.model';
import { FormsModule } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [TranslateModule, JsonPipe, FormsModule, CurrencyPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export default class SignalComponent implements OnInit {
  item = signal<Item>({ id: 1, name: 'Item 1', quantity: 1 });
  showOtherExamples = false;
  price = model<number>(100);
  total = computed(() => this.item().quantity * this.price());

  constructor() {
    effect(() => {
      console.log(
        'SignalComponent - effect:',
        this.item(),
        this.price(),
        this.total()
      );
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.item.update((value) => ({ ...value, quantity: 666 }));
      console.log(
        'SignalComponent - ngOnInit - item.quantity:',
        this.item().quantity
      );
    }, 2000);
  }

  increase(): void {
    this.item.update((value) => ({ ...value, quantity: value.quantity + 1 }));
  }
  decrease(): void {
    this.item.update((value) => ({ ...value, quantity: value.quantity - 1 }));
  }
  restart(): void {
    this.item.set({ ...this.item(), quantity: 0 });
  }
}
