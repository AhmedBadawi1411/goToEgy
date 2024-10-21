import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css','../../../styles.css']
})
export class EventsDetailsComponent implements OnInit{
  eventTitle = '';
  eventId = '';
  eventLocation = '';
  thumbnail! : string;
  img2! : string;
  companyImage! : string;
  companyName! : string;
  companyWebsite! : string;
  companyLocation! : string;
  isAvailable! : boolean;
  ticketPrice! : number;
  isSale! : boolean;
  sale!: string;

  private subscription!: Subscription;
  hours = 0;
  mins = 0;
  sec = 59;
  disSec!:string;
  disMins!:string;
  disHours!:string;

  constructor(private dataService:DataService, private route:ActivatedRoute){
    this.dataService.getData().subscribe(respponse =>{
      const id = this.route.snapshot.paramMap.get('id');
      this.eventId=respponse[id!].id;
      this.eventTitle=respponse[id!].name;
      this.eventLocation=respponse[id!].location;
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

  startCountdown(): void {
    const source = interval(1000);
    this.subscription = source.subscribe(val => {
      if (this.sec > 0) {
        this.sec--;
        this.disSec = this.sec.toString().padStart(2,'0');
      }else if(this.mins > 0){
        this.mins --;
        this.sec = 59;
        this.disMins = this.mins.toString().padStart(2,'0');
      }else if(this.hours > 0){
        this.sec = 59;
        this.mins = 59;
        this.hours --;
        this.disHours = this.hours.toString().padStart(2,'0');
      }else{
        this.isSale = false;
        this.subscription.unsubscribe();
      }
    });
  }

  ngOnInit(): void {
    this.disSec = this.sec.toString().padStart(2,'0');
    this.disMins = this.mins.toString().padStart(2,'0');
    this.disHours = this.hours.toString().padStart(2,'0');
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
