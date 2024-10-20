import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements OnInit {
  @Input() eventTitle!: string;
  @Input() eventDescription!: string;
  @Input() eventLocation!: string;
  @Input() website!: string;
  @Input() eventImg1!: string;
  @Input() eventImg2!: string;
  @Input() eventImg3!: string;
  @Input() providerImg!: string;
  @Input() eventId!: string;
  @Input() companyName!: string;

  eventImages: string[] = [];
  
  currentImages: string[] = [];

  fadeClass: string = '';

  ngOnInit(): void {
    this.eventImages = [this.eventImg1, this.eventImg2, this.eventImg3];
    this.currentImages = [...this.eventImages];
    this.next();
  }

  next() {
      this.currentImages.unshift(this.currentImages.pop()!);
  }

  prev() {
      this.currentImages.push(this.currentImages.shift()!);
  }

}
