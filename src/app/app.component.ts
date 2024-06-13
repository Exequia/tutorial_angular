import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TranslateService],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    const defaultLanguage = 'es';
    const languages = [defaultLanguage, 'en'];
    translate.addLangs(languages);
    translate.setDefaultLang(defaultLanguage);

    const browserLang: string = translate.getBrowserLang() || '';
    translate.use(languages.includes(browserLang) ? browserLang : 'es');
  }
}
