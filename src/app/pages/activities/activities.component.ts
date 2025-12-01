import { Component } from '@angular/core';
import { ContactBarComponent } from '../../components/contact-bar/contact-bar.component';
import { TitleBarWebComponent } from '../../components/title-bar-web/title-bar-web.component';
import { NgOptimizedImage } from '@angular/common';
import { ResponsiveDirective } from '../../directives/responsive.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-activities',
  imports: [ NgOptimizedImage, ResponsiveDirective, MatIconModule, MatButtonModule ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.sass'
})
export class ActivitiesComponent {
  language: 'en' | 'fr' = 'en';

  setLanguage(lang: 'en' | 'fr'): void {
    this.language = lang;
  }

}
