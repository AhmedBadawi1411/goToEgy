import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.css']
})
export class EventsHomeComponent {
  events:any;
  
  constructor(
    private dataService: DataService
  ) {

      this.dataService.getData().subscribe(
        (response: any[]) => {
          this.events = response.slice(5, 8).map((item: any) => ({
            title: item.name,
            description: `${item.p2}.`,
            location: item.location,
            companyName: item.providerName,
            website: item.providerwebsite,
            providerImg: item.img1,
            img1: item.img1,
            img2: item.img2,
            img3: item.img3,
            eventId: item.id - 1,
          }));
        });
  }
}
