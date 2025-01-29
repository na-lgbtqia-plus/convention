import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-title-bar-web',
  imports: [NgOptimizedImage, ResponsiveDirective],
  templateUrl: './title-bar-web.component.html',
  styleUrl: './title-bar-web.component.sass'
})
export class TitleBarWebComponent {

}
