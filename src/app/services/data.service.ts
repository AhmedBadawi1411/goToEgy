import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }

  private eventsJsonUrl = 'assets/data/events.json'

  getData():Observable<any>{
    return this.http.get<any>(this.eventsJsonUrl);
  }
  
}
