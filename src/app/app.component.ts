import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarWebComponent } from './components/navbar-web/navbar-web.component';
import { ContactBarComponent } from './components/contact-bar/contact-bar.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponsiveDirective } from './directives/responsive.directive';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { MatDrawer, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    NavbarWebComponent,
    NavbarMobileComponent,
    ResponsiveDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Register the Facebook SVG icon
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('facebook.svg')
    );
  }
}
