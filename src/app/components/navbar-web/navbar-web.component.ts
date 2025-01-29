import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-navbar-web',
  imports: [MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-web.component.html',
  styleUrl: './navbar-web.component.sass',
  hostDirectives: [ResponsiveDirective]
})
export class NavbarWebComponent {}
