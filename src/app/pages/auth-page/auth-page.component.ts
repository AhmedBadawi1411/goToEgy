import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit, AfterViewInit {
  // user = this.authService.user$;

  email: string = '';
  password: string = '';
  msg!:string;
  name: string = '';
  signup: any;
  signin:any;
  isMobile! : boolean;
  constructor(private authService: AuthService, private router:Router) {}

  // async signUp() {
  //   try {
  //     await this.authService.signUp(this.email, this.password, this.name);
  //     console.log('Sign up successful');
  //   } catch (error) {
  //     console.error('Sign up error:', error);
  //   }
  // }

  onSignup(form: NgForm) {
    if (form.valid) {
      const signUpData = {
        fullName: this.name,
        email: this.email,
        password: this.password,
        isAdmin:false,
        rating:0,
        UId:"ac7d8664-e15c-4b19-8cd8-0ffd0f3b6590" + Math.random()
      };
  
      this.authService.signUp(signUpData).subscribe({
        next: (response) => {
          console.log('Sign Up Successful:', response);
          this.authService.setIsLoggedIn(true);
          localStorage.setItem('userToken', response.UId);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error during sign-up:', error);
        },
        complete: () => {
          console.log('Sign Up process completed');
        }
      });
    }
  }

  onSubmit() {
    this.authService.loginWithEmail(this.email).subscribe({
      next:(data)=>{
        if(data.length > 0){
          if(data[0].password == this.password){
            this.authService.setIsLoggedIn(true);
            localStorage.setItem('userToken', data[0].UId);
            this.router.navigate(['/home']);
          }else{
            this.msg = "Invalid Password!";
          }
        }else{
          this.msg = "Email Not Found!"
        }
      }
    })
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    
    if(window.innerWidth < 769 ){
      this.isMobile = true

      setTimeout(()=>{
        this.signin = document.getElementById('login2');
      this.signup = document.getElementById('register2');
      
      this.signup.addEventListener('click',()=>{
        document.getElementsByClassName('form-container')[0].classList.toggle('active')
        document.getElementsByClassName('form-container')[1].classList.toggle('active')
      })
      this.signin.addEventListener('click',()=>{
        document.getElementsByClassName('form-container')[0].classList.toggle('active')
        document.getElementsByClassName('form-container')[1].classList.toggle('active')
      })
      },500)
    }
    
    registerBtn?.addEventListener('click', () => {
      container?.classList.add('active');
    });

    loginBtn?.addEventListener('click', () => {
      container?.classList.remove('active');
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if(width>768){
      this.isMobile = false;

      setTimeout(()=>{
        const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn?.addEventListener('click', () => {
      container?.classList.add('active');
    });

    loginBtn?.addEventListener('click', () => {
      container?.classList.remove('active');
    });
      },500)
    }else{
      this.isMobile = true;

      setTimeout(()=>{
        this.signin = document.getElementById('login2');
       this.signup = document.getElementById('register2');
      
      this.signup.addEventListener('click',()=>{
        document.getElementsByClassName('form-container')[0].classList.toggle('active')
        document.getElementsByClassName('form-container')[1].classList.toggle('active')
      })
      this.signin.addEventListener('click',()=>{
        document.getElementsByClassName('form-container')[0].classList.toggle('active')
        document.getElementsByClassName('form-container')[1].classList.toggle('active')
      })
      },500)
      
    } 
  }
    
}
  