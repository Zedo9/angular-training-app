import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeParticipantService } from '../fake-participant.service';
import { Participant } from '../Models/Participant';

@Component({
  selector: 'app-participants-add-form',
  templateUrl: './participants-add-form.component.html',
  styleUrls: ['./participants-add-form.component.css'],
})
export class ParticipantsAddFormComponent implements OnInit {
  constructor(
    private participantService: FakeParticipantService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addParticipant(participant: Participant) {
    this.participantService.add(participant);
    this.router.navigateByUrl('admin/participants/list');
  }
}
