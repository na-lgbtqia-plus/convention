import { Component } from '@angular/core';
import { ContactBarComponent } from '../../components/contact-bar/contact-bar.component';
import { TitleBarWebComponent } from '../../components/title-bar-web/title-bar-web.component';
import { NgOptimizedImage } from '@angular/common';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-activities',
  imports: [ NgOptimizedImage, ResponsiveDirective ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.sass'
})
export class ActivitiesComponent {

}
