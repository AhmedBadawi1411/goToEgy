import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  private _isMapShownSubject = new BehaviorSubject<boolean>(true);

  public isMapShown$ = this._isMapShownSubject.asObservable();

  public isMapShownSetter(val: boolean) {
    this._isMapShownSubject.next(val);
  }

  public isMapShownGetter(): boolean {
    return this._isMapShownSubject.getValue();
  }


  private _isLocationsShownSubject = new BehaviorSubject<boolean>(false);

  public isLocationsShown$ = this._isLocationsShownSubject.asObservable();

  public isLocationsShownSetter(val: boolean) {
    this._isLocationsShownSubject.next(val);
  }

  public isLocationsShownGetter(): boolean {
    return this._isLocationsShownSubject.getValue();
  }
}
