import { Component } from '@angular/core';
import { ContactBarComponent } from '../../components/contact-bar/contact-bar.component';
import { TitleBarWebComponent } from '../../components/title-bar-web/title-bar-web.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ResponsiveDirective } from '../../directives/responsive.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-accomodation',
  imports: [MatIconModule, MatButtonModule, ResponsiveDirective, NgOptimizedImage],
  templateUrl: './accomodation.component.html',
  styleUrl: './accomodation.component.sass'
})
export class AccomodationComponent {

}
