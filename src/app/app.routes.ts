import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
import { VenueComponent } from './pages/venue/venue.component';
import { ActivitiesComponent } from './pages/activities/activities.component';

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
}];
