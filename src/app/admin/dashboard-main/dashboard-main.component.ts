import { Component, OnInit } from '@angular/core';
import { FakeFormateurServiceService } from '../fake-formateur-service.service';
import { FakeParticipantService } from '../fake-participant.service';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css'],
})
export class DashboardMainComponent implements OnInit {
  tracks;
  nbSessions;
  nbParticipants;
  nbFormateurs;
  constructor(
    private formateurService: FakeFormateurServiceService,
    private participantService: FakeParticipantService,
    private sessionServices: FakesessionitemService
  ) {
    this.tracks = [
      'MEAN',
      'Angular',
      'NodeJS',
      'Symphony',
      'Laravel',
      'Ionic',
      'Android',
      'Xamarin',
      'Swift',
    ];
  }

  ngOnInit(): void {
    this.nbSessions = this.sessionServices.get().length;
    this.nbParticipants = this.participantService.get().length;
    this.nbFormateurs = this.formateurService.get().length;
  }
  sessionCount(track: string) {
    return this.sessionServices.getSessionCount(track);
  }
}
