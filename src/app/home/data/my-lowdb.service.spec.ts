import { TestBed } from '@angular/core/testing';

import { MyLowdbService } from './my-lowdb.service';

describe('MyLowdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLowdbService = TestBed.get(MyLowdbService);
    expect(service).toBeTruthy();
  });
});
