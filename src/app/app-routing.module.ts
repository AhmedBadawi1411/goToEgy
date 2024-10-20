import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventsDetailsComponent } from './pages/events-details/events-details.component';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';
import { ToursDetailsComponent } from './pages/tours-details/tours-details.component';
import { ContactusPageComponent } from './pages/contactus-page/contactus-page.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { FAQPageComponent } from './pages/faq-page/faq-page.component';
import { PartnersPageComponent } from './pages/partners-page/partners-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { authGuard } from './guards/auth.guard';



const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component:HomePageComponent},
  {path: 'events', component:EventsPageComponent},
  {path: 'eventdetails/:id', component:EventsDetailsComponent},
  {path: 'tours', component:ToursPageComponent},
  {path: 'toursdetails/:id', component:ToursDetailsComponent},
  {path: 'contactus', component:ContactusPageComponent},
  {path: 'aboutus', component:AboutusPageComponent},
  {path: 'faq', component:FAQPageComponent},
  {path: 'partners', component:PartnersPageComponent},
  {path: 'privacypolices', component:PrivacyPageComponent},
  {path: 'signin', component:AuthPageComponent},
  {path: 'support', component:SupportPageComponent},
  {path: 'terms', component:TermsPageComponent},
  {path: 'testimonials', component:TestimonialsPageComponent},
  {path: 'payment', component:PaymentComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
