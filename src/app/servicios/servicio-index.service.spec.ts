import { TestBed } from '@angular/core/testing';

import { ServicioIndexService } from './servicio-index.service';

describe('ServicioIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioIndexService = TestBed.get(ServicioIndexService);
    expect(service).toBeTruthy();
  });
});
