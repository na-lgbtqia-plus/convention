import { Component } from '@angular/core';
import { ContactBarComponent } from '../../components/contact-bar/contact-bar.component';
import { TitleBarWebComponent } from '../../components/title-bar-web/title-bar-web.component';

@Component({
  selector: 'app-venue',
  imports: [ContactBarComponent, TitleBarWebComponent],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.sass'
})
export class VenueComponent {

}
