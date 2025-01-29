import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-navbar-web',
  imports: [MatButtonModule, MatIconModule, RouterLink, RouterLinkActive, ResponsiveDirective],
  templateUrl: './navbar-web.component.html',
  styleUrl: './navbar-web.component.scss',
})
export class NavbarWebComponent {}
