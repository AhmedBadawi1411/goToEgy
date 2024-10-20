import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input() eventTitle!: string;
  @Input() eventDescription!: string;
  @Input() eventLocation!: string;
  @Input() eventImg!: string;
  @Input() eventId!: string;
}
