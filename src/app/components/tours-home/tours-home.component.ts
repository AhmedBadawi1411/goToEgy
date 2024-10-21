import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tours-home',
  templateUrl: './tours-home.component.html',
  styleUrls: ['./tours-home.component.css']
})
export class ToursHomeComponent{
  tours:any;
  constructor(
    private dataService: DataService
  ) {
    this.dataService.getData().subscribe(
      (response: any[]) => {
        this.tours = response.slice(2, 5).map((item: any) => ({
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
