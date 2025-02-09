import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-navbar-mobile',
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive, ResponsiveDirective],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {
  opened: boolean = false;
  @ViewChild('drawer') drawer!: MatDrawer;
}
