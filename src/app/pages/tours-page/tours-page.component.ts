import { AfterViewInit, Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.css']
})
export class ToursPageComponent{
  tours:any

  constructor(
    private dataService:DataService
  ){
    this.dataService.getData().subscribe(
      response=>{
        this.tours = Array.from({ length: response.length},
          (_,i)=>({
            title: `${ response[i].name}`,
            description: `${response[i].p2 + response[i].p2}.`,
            location:`${ response[i].location}`,
            companyName:`${ response[i].providerName}`,
            website:`${ response[i].providerwebsite}`,
            providerImg:`${ response[i].img1}`,
            img1:`${ response[i].img1}`,
            img2:`${ response[i].img2}`,
            img3:`${ response[i].img3}`,
            eventId:`${ response[i].id - 1}`,
          }));
      });
  }

}
