import { TestBed } from '@angular/core/testing';

import { DrawShapeService } from './draw-shape.service';

describe('DrawShapeService', () => {
  let service: DrawShapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawShapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
