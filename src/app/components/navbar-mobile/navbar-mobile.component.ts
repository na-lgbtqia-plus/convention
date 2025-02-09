import { Component, Input, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { ResponsiveDirective } from '../../directives/responsive.directive';
import { ContactBarComponent } from "../contact-bar/contact-bar.component";

@Component({
  selector: 'app-navbar-mobile',
  imports: [ContactBarComponent, MatSidenavModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive, ContactBarComponent],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.sass'
})
export class NavbarMobileComponent {
  @Input() drawer!: MatDrawer;

  close() {
    this.drawer.close();
  }
}
