import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar-mobile',
  imports: [NgOptimizedImage],
  templateUrl: './title-bar-mobile.component.html',
  styleUrl: './title-bar-mobile.component.sass'
})
export class TitleBarMobileComponent {
  @Input() isHomepage: boolean = false;
}
