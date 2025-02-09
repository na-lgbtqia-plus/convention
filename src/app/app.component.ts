import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NavbarWebComponent } from './components/navbar-web/navbar-web.component';
import { ContactBarComponent } from './components/contact-bar/contact-bar.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponsiveDirective } from './directives/responsive.directive';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { MatDrawer, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { filter, Subscription } from 'rxjs';
import { TitleBarMobileComponent } from './components/title-bar-mobile/title-bar-mobile.component';
import { TitleBarWebComponent } from './components/title-bar-web/title-bar-web.component';

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
    TitleBarMobileComponent,
    TitleBarWebComponent,
    ContactBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  isHomepage = false;
  private routerSubscription!: Subscription;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private route: ActivatedRoute, private router: Router) {
    // Register the Facebook SVG icon
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('facebook.svg')
    );
  }

  ngOnInit() {
    this.checkHomepage(); // Check initial route

    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkHomepage();
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private checkHomepage() {
    this.isHomepage = this.route.firstChild?.snapshot.data['isHomepage'] || false; // Use optional chaining (?.)
  }

}
