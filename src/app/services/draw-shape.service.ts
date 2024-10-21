import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawShapeService {

  constructor(private http: HttpClient) { }

  getShapes() {
    return this.http.get('/assets/data/paths.geojson');
  }
}
