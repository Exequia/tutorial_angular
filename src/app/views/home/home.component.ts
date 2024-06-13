import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  NgIconComponent,
  provideIcons,
  provideNgIconsConfig,
} from '@ng-icons/core';
import { bootstrapExclamationTriangleFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, NgIconComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  icon = bootstrapExclamationTriangleFill;
}
