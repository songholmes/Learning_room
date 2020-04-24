import { TestBed } from '@angular/core/testing';

import { OiappCmtService } from './oiapp-cmt.service';

describe('OiappCmtService', () => {
  let service: OiappCmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OiappCmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
