import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsPageComponent } from './testimonials-page.component';

describe('TestimonialsPageComponent', () => {
  let component: TestimonialsPageComponent;
  let fixture: ComponentFixture<TestimonialsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsPageComponent]
    });
    fixture = TestBed.createComponent(TestimonialsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
