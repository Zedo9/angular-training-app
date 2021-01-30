import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakesessionitemService } from '../fakesessionitem.service';
import { Session } from '../Models/session';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css'],
})
export class SessionEditFormComponent implements OnInit {
  id;
  private sub: any;
  session: Session;
  tracks = [
    'MEAN',
    'Angular',
    'NodeJS',
    'Android',
    'Swift',
    'Xamarin',
    'Ionic',
  ];
  constructor(
    private route: ActivatedRoute,
    private sessionItemService: FakesessionitemService,
    private router: Router
  ) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
    console.log('Session ID ' + this.id.toString());
    this.session = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem) {
    this.router.navigateByUrl('admin/sessions/list');
  }
}
