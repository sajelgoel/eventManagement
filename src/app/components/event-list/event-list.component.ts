import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventsInfoService } from '../../services/events-info.service';
import { EventInfo } from '../../interfaces';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../filters/filter.pipe';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FilterPipe],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent {
  events: Array<EventInfo>;
  searchText = '';

  constructor(private eventInfo: EventsInfoService) {
    this.events = this.eventInfo.getEvents();
  }

  deleteEvent(id: string) {
    this.events = this.eventInfo.deleteEvent(id);
  }
}
