import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css','../../../styles.css']
})
export class FilterBarComponent{
  constructor(private sharedService:SharedService){}

  private isMapShown = true;
  private isLocationsShown = false;

  isMapShownGetter(){
    return !this.isMapShown;
  }

  toggleVisiablity(){
      Array.from(document.getElementsByClassName('filterBtn')).forEach(element => {
        element.classList.toggle('visable');
      });
      var element = document.getElementsByClassName('filterBtns-container')[0];
      element.classList.toggle('visable');
  }

  toggleMap(){
    this.isMapShown = !this.isMapShown;
    this.sharedService.isMapShownSetter(this.isMapShown);
    document.getElementById('mapButton')?.classList.toggle('active')
  }
  
  toggleLocationsList(){
    this.isLocationsShown = !this.isLocationsShown;
    this.sharedService.isLocationsShownSetter(this.isLocationsShown);
    document.getElementById('locationsBtnList')?.classList.toggle('active')
  }
}
