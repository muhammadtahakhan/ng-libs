import { TestBed } from '@angular/core/testing';

import { CurtainModalService } from './curtain-modal.service';

describe('CurtainModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurtainModalService = TestBed.get(CurtainModalService);
    expect(service).toBeTruthy();
  });
});
