import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-sessions-management',
  templateUrl: './sessions-management.component.html',
  styleUrls: ['./sessions-management.component.css'],
  providers: [FakesessionitemService],
})
export class SessionsManagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
