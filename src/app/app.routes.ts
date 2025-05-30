import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
import { VenueComponent } from './pages/venue/venue.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { FoodComponent } from './pages/food/food.component';

export const routes: Routes = [ {
  path: '', 
  component: HomeComponent,
  title : 'Home: 1st European LGBTQIA+ Convention of Narcotics Anonymous',
  data: { isHomepage: true } 
},
{
  path: 'accomodation', 
  component: AccomodationComponent,
  title : 'Accomodation: 1st European LGBTQIA+ Convention of Narcotics Anonymous'
},
{
  path: 'venue', 
  component: VenueComponent,
  title : 'Venue: 1st European LGBTQIA+ Convention of Narcotics Anonymous'
},
{
  path: 'activities', 
  component: ActivitiesComponent,
  title : 'Activities: 1st European LGBTQIA+ Convention of Narcotics Anonymous'
},
{
  path: 'food', 
  component: FoodComponent,
  title : 'Food: 1st European LGBTQIA+ Convention of Narcotics Anonymous'
},
{
  path: 'contact', 
  component: ContactComponent,
  title : 'Contact: 1st European LGBTQIA+ Convention of Narcotics Anonymous'
},
{
  path: 'about', 
  component: AboutComponent,
  title : 'About: 1st European LGBTQIA+ Convention of Narcotics Anonymous'
}];
