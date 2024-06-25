import { Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

export const routes: Routes = [
  {
    path: '',
    component: EventListComponent,
  },
  {
    path: 'add',
    component: EventDetailsComponent,
  },
  {
    path: 'edit/:id',
    component: EventDetailsComponent,
  },
];
