import { Component, OnInit } from '@angular/core';
import { FakeParticipantService } from '../fake-participant.service';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css'],
})
export class ParticipantsListComponent implements OnInit {
  participantsItems;
  constructor(private participantService: FakeParticipantService) {}

  ngOnInit(): void {
    this.participantsItems = this.participantService.get();
  }
  onDelete(participant) {
    this.participantService.delete(participant);
  }
}
