import { Component, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/services/marker.service';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css','../../../styles.css']
})
export class EventsPageComponent {
  events:any

  constructor(
    private markerService: MarkerService, 
    private sharedService: SharedService, 
    private dataService:DataService) {
      this.dataService.getData().subscribe(response => {
        this.events = Array.from({ length: response.length }, (_, i) => ({
          title: `${ response[i].name}`,
          description: `${response[i].p2}.`,
          location:`${ response[i].location}`,
          img1:`${ response[i].img1}`,
          eventId:`${ response[i].id - 1}`,
        }));
      });
    }
    
    

  displayMap: boolean = true;
  displayLocation: boolean = false;

  private map!: L.Map;


  private initMap(): void {
    this.map = L.map('map', {
      center: [26.595902, 31.593445],
      zoom: 6
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
    this.sharedService.isMapShown$.subscribe(isShown => {
      this.displayMap = isShown; 
      setTimeout(()=>{
        this.updateMap();
        this.markerService.makeCapitalMarkers(this.map);
      }, 100)
    });
    this.sharedService.isLocationsShown$.subscribe(isShown => {
      this.displayLocation = isShown; 
    });
    this.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    width>768 ? this.sharedService.isLocationsShown$.subscribe(isShown => {
      this.displayLocation = true; 
    }):this.sharedService.isLocationsShown$.subscribe(isShown => {
      this.displayLocation = isShown; 
    });
  }

  init(){
    this.sharedService.isLocationsShown$.subscribe(isShown => {
      this.displayLocation = true;});
  }

  private updateMap() {
    if (this.displayMap) {
      if (!this.map) {
        this.initMap();
      }
    } else {
      if (this.map) {
        this.map.remove();
        this.map = undefined!;
      }
    }
  }
}
