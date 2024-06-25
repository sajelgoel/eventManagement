import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventsInfoService } from '../../services/events-info.service';
import { EventInfo } from '../../interfaces';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
})
export class EventDetailsComponent {
  eventForm: FormGroup;
  editData: EventInfo = {
    title: '',
    id: String(Math.floor(Math.random() * 390000)),
    date: '',
    location: '',
    description: '',
  };

  add = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private eventInfo: EventsInfoService
  ) {
    if (this.router.url.includes('edit')) {
      this.editData = this.eventInfo.getEventInfo(
        this.route.snapshot.params['id']
      );
    } else {
      this.add = true;
    }
    this.eventForm = this.fb.group({
      title: [this.editData.title, Validators.required],
      location: [this.editData.location, Validators.required],
      date: [this.editData.date, Validators.required],
      description: [this.editData.description, Validators.required],
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.add
        ? this.eventInfo.addEventInfo({
            ...this.eventForm.value,
            id: this.editData.id,
          })
        : this.eventInfo.editEventInfo({
            ...this.eventForm.value,
            id: this.editData.id,
          });
      this.router.navigateByUrl('');
    } else {
      console.log('Form is not valid');
    }
  }
}
