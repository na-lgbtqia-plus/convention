import { Component } from '@angular/core';
import { ContactBarComponent } from '../../components/contact-bar/contact-bar.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ContactBarComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  title = '1st European LGBTQIA+ Convention of Narcotics Anonymous';
}
