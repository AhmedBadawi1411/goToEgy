import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../styles.css']
})
export class AppComponent{
  constructor(private auth:AuthService){
    if(localStorage.getItem('userToken')){
      this.auth.setIsLoggedIn(true);
    }
  }
  
  title = 'go-to-egypt';

}
