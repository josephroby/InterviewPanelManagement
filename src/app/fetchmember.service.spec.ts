import { TestBed } from '@angular/core/testing';

import { FetchmemberService } from './fetchmember.service';

describe('FetchmemberService', () => {
  let service: FetchmemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchmemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
