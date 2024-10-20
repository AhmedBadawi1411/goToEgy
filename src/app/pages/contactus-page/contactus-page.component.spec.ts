import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusPageComponent } from './contactus-page.component';

describe('ContactusPageComponent', () => {
  let component: ContactusPageComponent;
  let fixture: ComponentFixture<ContactusPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactusPageComponent]
    });
    fixture = TestBed.createComponent(ContactusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
