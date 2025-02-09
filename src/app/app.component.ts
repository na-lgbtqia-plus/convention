import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarWebComponent } from './components/navbar-web/navbar-web.component';
import { ContactBarComponent } from "./components/contact-bar/contact-bar.component";
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponsiveDirective } from './directives/responsive.directive';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, MatSidenavModule, RouterOutlet, NavbarWebComponent, NavbarMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Register the Facebook SVG icon
    iconRegistry.addSvgIcon(
      'facebook', 
      sanitizer.bypassSecurityTrustResourceUrl('facebook.svg')
    );
  }

   @ViewChild('navbarMobile') navbarMobile!: NavbarMobileComponent;

   toggleDrawer() {
    if (this.navbarMobile && this.navbarMobile.drawer) {
       this.navbarMobile.drawer.toggle();
    }
 }
}
