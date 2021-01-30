import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css'],
})
export class SessionAddFormComponent implements OnInit {
  constructor(
    private sessionItemService: FakesessionitemService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addSession(sessionItem) {
    this.sessionItemService.add(sessionItem);
    this.router.navigateByUrl('admin/sessions/list');
  }
}
