import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarWebComponent } from './components/navbar-web/navbar-web.component';
import { ContactBarComponent } from "./components/contact-bar/contact-bar.component";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarWebComponent, ContactBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Register the Facebook SVG icon
    iconRegistry.addSvgIcon(
      'facebook', 
      sanitizer.bypassSecurityTrustResourceUrl('facebook.svg')
    );
  }
}
