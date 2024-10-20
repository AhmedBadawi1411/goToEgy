import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
constructor(private auth:AuthService){
  console.log(this.auth.getIsLoggedIn());
}


toggleDropdown(){
document.getElementsByClassName('taps-container')[0].classList.toggle('active');
}

logOut(){
  localStorage.removeItem('userToken');
  this.auth.setIsLoggedIn(false);
  this.loggedIn=false
}

loggedIn:boolean = this.auth.getIsLoggedIn();

}
