import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteItem, routesConfig } from './navbar.router.config';
import { map } from 'lodash';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  routesArray: { key: string; value: RouteItem[] }[] = [];

  ngOnInit(): void {
    this.routesArray = map(routesConfig, (value, key) => ({ key, value }));
  }
}
