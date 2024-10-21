import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';
import { ToursDetailsComponent } from './pages/tours-details/tours-details.component';
import { EventsDetailsComponent } from './pages/events-details/events-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { ContactusPageComponent } from './pages/contactus-page/contactus-page.component';
import { PartnersPageComponent } from './pages/partners-page/partners-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { FAQPageComponent } from './pages/faq-page/faq-page.component';
import { PaginatedListComponent } from './components/paginated-list/paginated-list.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { PaymentComponent } from './pages/payment/payment.component';
import { SliderComponent } from './components/slider/slider.component';
import { EventsHomeComponent } from './components/events-home/events-home.component';
import { ToursHomeComponent } from './components/tours-home/tours-home.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { BrandComponent } from './components/brand/brand.component';
import { SuccessPaymentComponent } from './page/success-payment/success-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsPageComponent,
    FooterComponent,
    ToursPageComponent,
    ToursDetailsComponent,
    EventsDetailsComponent,
    HomePageComponent,
    AboutusPageComponent,
    SupportPageComponent,
    TermsPageComponent,
    PrivacyPageComponent,
    ContactusPageComponent,
    PartnersPageComponent,
    TestimonialsPageComponent,
    FAQPageComponent,
    PaginatedListComponent,
    FilterBarComponent,
    EventCardComponent,
    TourCardComponent,
    AuthPageComponent,
    PaymentComponent,
    SliderComponent,
    EventsHomeComponent,
    ToursHomeComponent,
    SubscribeComponent,
    BrandComponent,
    SuccessPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [
    // provideHttpClient(),
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
