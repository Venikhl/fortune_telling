import { TestBed } from '@angular/core/testing';

import { HttpSignService } from './http-sign.service';

describe('HttpSignService', () => {
  let service: HttpSignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
