import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  //session_name = 'Formation Web';
  nbpart: number = 0;
  firstSession = {
    id: 1,
    name: 'Formation Web',
    track: 'MEAN Stack',
    date: 'Prévue du 11/06/2018 au 15/06/2018',
    local: 'Lyon',
    particpants : 0
  }
  nbrParticipantsChange(event) {
    this.nbpart = event.value;
  }
}
