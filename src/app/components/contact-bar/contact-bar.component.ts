import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-contact-bar',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './contact-bar.component.html',
  styleUrl: './contact-bar.component.sass'
})
export class ContactBarComponent {
  @Input() isHomepage: boolean = false;
}
