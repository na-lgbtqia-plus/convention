import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-bar',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './contact-bar.component.html',
  styleUrl: './contact-bar.component.sass'
})
export class ContactBarComponent {
  @Input() isHomepage: boolean = false;
}
