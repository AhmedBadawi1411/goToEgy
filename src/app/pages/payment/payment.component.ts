import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  eventTitle: any;
  eventLocation: any;
  eventDescription: any;
  thumbnail: any;
  img2: any;
  companyImage: any;
  companyName: any;
  companyLocation: any;
  companyWebsite: any;
  isAvailable!: boolean;
  isSale!: boolean;
  ticketPrice: any;
  sale: any;

  constructor(private dataService:DataService, private route:ActivatedRoute){
    this.dataService.getData().subscribe(respponse =>{
      const id = this.route.snapshot.paramMap.get('id');
      this.eventTitle=respponse[id!].name;
      this.eventLocation=respponse[id!].location;
      this.eventDescription=respponse[id!].p2;
      this.thumbnail=respponse[id!].img1;
      this.img2=respponse[id!].img2;
      this.img2=respponse[id!].img2;
      this.companyImage=respponse[id!].img2;
      this.companyName=respponse[id!].providerName;
      this.companyLocation=respponse[id!].providerLocation;
      this.companyWebsite=respponse[id!].providerwebsite;
      respponse[id!].ticketsCount > 0 ? this.isAvailable = true : this.isAvailable = false;
      if(respponse[id!].sale == 0){
        this.isSale = false;
        this.ticketPrice = respponse[id!].ticketPrice;
      }else{
        this.isSale = true;
        this.ticketPrice = respponse[id!].ticketPrice - (respponse[id!].ticketPrice * (respponse[id!].sale / 1000) )
      };
      this.sale = respponse[id!].sale;
    })
  }
}
