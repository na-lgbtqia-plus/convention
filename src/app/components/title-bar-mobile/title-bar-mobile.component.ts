import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-title-bar-mobile',
  imports: [NgOptimizedImage, ResponsiveDirective],
  templateUrl: './title-bar-mobile.component.html',
  styleUrl: './title-bar-mobile.component.sass'
})
export class TitleBarMobileComponent {

}
