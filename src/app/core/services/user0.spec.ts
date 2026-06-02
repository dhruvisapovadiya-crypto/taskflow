import { TestBed } from '@angular/core/testing';

import { User0 } from './user0';

describe('User0', () => {
  let service: User0;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User0);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
