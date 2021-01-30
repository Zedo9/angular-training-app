import { Injectable } from '@angular/core';
import { PARTICIPANTS } from './Data/participants';

@Injectable({
  providedIn: 'root',
})
export class FakeParticipantService {
  get() {
    return PARTICIPANTS;
  }
  delete(participant) {
    let index;
    index = PARTICIPANTS.indexOf(participant);
    if (PARTICIPANTS.indexOf(participant) >= 0) {
      PARTICIPANTS.splice(index, 1);
    }
  }

  add(participant) {
    participant.id = PARTICIPANTS.length + 1;
    PARTICIPANTS.push(participant);
  }

  getParticipant(id: number) {
    return PARTICIPANTS[id - 1];
  }
}
