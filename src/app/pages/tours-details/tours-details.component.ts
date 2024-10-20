import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tours-details',
  templateUrl: './tours-details.component.html',
  styleUrls: ['./tours-details.component.css','../../../styles.css']
})
export class ToursDetailsComponent {
  eventTitle = '';
  eventLocation = '';
  thumbnail! : string;
  img1! : string;
  img2! : string;
  img3! : string;
  companyImage! : string;
  companyName! : string;
  companyWebsite! : string;
  companyLocation! : string;


  constructor(private dataService:DataService, private route:ActivatedRoute){
    this.dataService.getData().subscribe(respponse =>{
      const id = this.route.snapshot.paramMap.get('id');
      this.eventTitle=respponse[id!].name;
      this.eventLocation=respponse[id!].location;
      this.thumbnail=respponse[id!].img1;
      this.img1=respponse[id!].img1;
      this.img2=respponse[id!].img2;
      this.img3=respponse[id!].img3;
      this.companyImage=respponse[id!].img2;
      this.companyName=respponse[id!].providerName;
      this.companyLocation=respponse[id!].providerLocation;
      this.companyWebsite=respponse[id!].providerwebsite;
    })
  }
  
}
