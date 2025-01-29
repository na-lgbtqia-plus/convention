import { Component } from '@angular/core';
import { ContactBarComponent } from '../../components/contact-bar/contact-bar.component';
import { TitleBarWebComponent } from '../../components/title-bar-web/title-bar-web.component';

@Component({
  selector: 'app-accomodation',
  imports: [ContactBarComponent, TitleBarWebComponent],
  templateUrl: './accomodation.component.html',
  styleUrl: './accomodation.component.sass'
})
export class AccomodationComponent {

}
