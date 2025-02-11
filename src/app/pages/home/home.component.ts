import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ContactBarComponent } from '../../components/contact-bar/contact-bar.component';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ResponsiveDirective } from '../../directives/responsive.directive';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, ResponsiveDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  title = '1st European LGBTQIA+ Convention of Narcotics Anonymous'; 
}