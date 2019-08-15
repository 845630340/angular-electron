import { TestBed } from '@angular/core/testing';

import { MyLndbService } from './my-lndb.service';

describe('MyLndbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLndbService = TestBed.get(MyLndbService);
    expect(service).toBeTruthy();
  });
});
