import { Component } from '@angular/core';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-contact',
  imports: [ResponsiveDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {

}
