import { TestBed } from '@angular/core/testing';

import { WallapopRESTService } from './wallapop-rest.service';

describe('WallapopRestService', () => {
  let service: WallapopRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WallapopRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
