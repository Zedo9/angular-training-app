import { TestBed } from '@angular/core/testing';

import { FakeParticipantService } from './fake-participant.service';

describe('FakeParticipantService', () => {
  let service: FakeParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
