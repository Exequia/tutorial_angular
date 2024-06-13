import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HoverHighlightDirective } from '../../directives/hover-highlight.directive';
import { SeparatorPipe } from '../../pipes/separator.pipe';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [TranslateModule, SeparatorPipe, HoverHighlightDirective],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss',
})
export default class StandaloneComponent {
  private readonly translate: TranslateService = inject(TranslateService);
  pipeText: string = this.translate.instant('standalone.pipes.test');
}
