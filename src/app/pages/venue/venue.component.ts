import { Component } from '@angular/core';
import { ContactBarComponent } from '../../components/contact-bar/contact-bar.component';
import { TitleBarWebComponent } from '../../components/title-bar-web/title-bar-web.component';
import { NgOptimizedImage } from '@angular/common';
import { ResponsiveDirective } from '../../directives/responsive.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-venue',
  imports: [NgOptimizedImage, ResponsiveDirective, MatButtonModule, MatIconModule],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.sass'
})
export class VenueComponent {

}
