import { Injectable } from '@angular/core';
import { EventInfo } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class EventsInfoService {
  private events: Array<EventInfo> = [
    {
      title: 'Tech Conference 2024',
      id: '1',
      date: '2024-07-15',
      location: 'San Francisco, CA',
      description:
        'A gathering of technology enthusiasts and professionals to discuss the latest trends in tech.',
    },
    {
      title: 'Music Festival',
      id: '2',
      date: '2024-08-22',
      location: 'Austin, TX',
      description:
        'An outdoor music festival featuring performances by popular bands and solo artists.',
    },
    {
      title: 'Art Expo',
      id: '3',
      date: '2024-09-10',
      location: 'New York, NY',
      description:
        'An exhibition showcasing contemporary art from emerging and established artists.',
    },
    {
      title: 'Food & Wine Fair',
      id: '4',
      date: '2024-10-05',
      location: 'Napa Valley, CA',
      description:
        'A fair offering a wide range of food and wine tastings from local producers.',
    },
  ];
  constructor() {}

  getEventInfo(id: string): EventInfo {
    const event = this.events.filter((event) => event.id === id);
    return event.length
      ? event[0]
      : {
          title: '',
          id: String(Math.floor(Math.random() * 390000)),
          date: '',
          location: '',
          description: '',
        };
  }

  editEventInfo(eventInfo: EventInfo): void {
    this.events = this.events.map((event) => {
      if (event.id === eventInfo.id) {
        return eventInfo;
      }
      return event;
    });
  }

  addEventInfo(event: EventInfo): void {
    this.events = this.events.concat([event]);
  }

  getEvents(): Array<EventInfo> {
    return this.events;
  }

  deleteEvent(id: string): Array<EventInfo> {
    this.events = this.events.filter((event) => event.id !== id);
    return this.events;
  }
}
