
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  constructor(private http:HttpClient, private popupService:PopupService) { }

  capitals: string = '/assets/data/locations.geojson';
  
  // makeCapitalMarkers(map: L.Map): void { 
  //   this.http.get(this.capitals).subscribe((res: any) => {
  //     for (const c of res.features) {
  //       const lon = c[0].geometry.coordinates[0];
  //       const lat = c[0].geometry.coordinates[1];
  //       const marker = L.marker([lat, lon]);
        
  //       marker.addTo(map);
  //     }
  //   });
  // }

  makeCapitalMarkers(map: L.Map): void {
    this.getGeoJSON().subscribe(geojson => {
      L.geoJSON(geojson, {
        onEachFeature: (feature, layer) => {
          if (feature.properties) {
            layer.bindPopup(this.popupService.makeCapitalPopup(feature.properties));
          }
        }
      }).addTo(map);
    });
  }

  // Fetch GeoJSON data
  private getGeoJSON(): Observable<any> {
    return this.http.get(this.capitals);
  }
}