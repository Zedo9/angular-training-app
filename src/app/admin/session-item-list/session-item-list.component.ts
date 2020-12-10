import { Component, Input, OnInit } from '@angular/core';
import {SESSIONITEMS} from '../sessions'
@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {

  @Input() session
  constructor() { }

  sessionItems = SESSIONITEMS;

  ngOnInit(): void {
  }

}
