import { Component, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/services/marker.service';
import { DataService } from 'src/app/services/data.service';
import { DrawShapeService } from 'src/app/services/draw-shape.service';


const iconRetinaUrl = '/assets/marker-icon-2x.png';
const iconUrl = '/assets/marker-icon.png';
const shadowUrl = '/assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [15, 25],
  iconAnchor: [10, 25],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [25, 25]
});
L.Marker.prototype.options.icon = iconDefault;


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
    private dataService:DataService,
  private drawService:DrawShapeService) {
      this.dataService.getData().subscribe(response => {
        this.events = Array.from({ length: response.length }, (_, i) => ({
          title: `${ response[i].name}`,
          description: `${response[i].p2}.`,
          location:`${ response[i].location}`,
          img1:`${ response[i].img1}`,
          eventId:`${ response[i].id - 1}`,
        }));
      });


      this.drawService.getShapes().subscribe(states => {
        this.states = states;
      });

      const width = window.innerWidth;
      width>768 ? this.sharedService.isLocationsShown$.subscribe(isShown => {
        this.displayLocation = true; 
      }):this.sharedService.isLocationsShown$.subscribe(isShown => {
        this.displayLocation = isShown; 
      });
    }
    
    

  displayMap: boolean = true;
  displayLocation: boolean = false;

  private map!: L.Map;
  states : any;

  
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

  private initStatesLayer() {
    const stateLayer = L.geoJSON(this.states, {
      style: (feature) => ({
        weight: 6,
        opacity: 1,
        color: '#E7494A',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      })
    });

    this.map.addLayer(stateLayer);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
    this.sharedService.isMapShown$.subscribe(isShown => {
      this.displayMap = isShown; 
      setTimeout(()=>{
        this.updateMap();
        this.markerService.makeCapitalMarkers(this.map);
        this.drawService.getShapes().subscribe(states => {
          this.states = states;
          this.initStatesLayer();
        });
      }, 100)
    });
    this.sharedService.isLocationsShown$.subscribe(isShown => {
      this.displayLocation = isShown; 
    });
    this.init();

    this.drawService.getShapes().subscribe(states => {
      this.states = states;
      this.initStatesLayer();
    });
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
    const width = window.innerWidth;
      width>768 ? this.sharedService.isLocationsShown$.subscribe(isShown => {
        this.displayLocation = true; 
      }):this.sharedService.isLocationsShown$.subscribe(isShown => {
        this.displayLocation = isShown; 
      });
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

  zoomToLocation(state: any): void {
    const coordinates = state.geometry.coordinates;

    const lat = coordinates[0][1];
    const lng = coordinates[0][0];

    this.map.flyTo([lat, lng], 9);
  }
}
