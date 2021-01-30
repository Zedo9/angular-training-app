import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeParticipantService } from '../fake-participant.service';
import { Participant } from '../Models/Participant';

@Component({
  selector: 'app-participants-edit-form',
  templateUrl: './participants-edit-form.component.html',
  styleUrls: ['./participants-edit-form.component.css'],
})
export class ParticipantsEditFormComponent implements OnInit {
  id;
  private sub: any;
  participant: Participant;
  constructor(
    private route: ActivatedRoute,
    private participantService: FakeParticipantService,
    private router: Router
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
    this.participant = this.participantService.getParticipant(this.id);
  }

  ngOnInit(): void {}

  editParticipant(participant) {
    this.router.navigateByUrl('admin/participants/list');
  }
}
