import { Component, OnInit } from '@angular/core';
import { FakeFormateurServiceService } from '../fake-formateur-service.service';

@Component({
  selector: 'app-trainers-list',
  templateUrl: './trainers-list.component.html',
  styleUrls: ['./trainers-list.component.css'],
})
export class TrainersListComponent implements OnInit {
  formateursItems;
  constructor(private formateurService: FakeFormateurServiceService) {}

  ngOnInit(): void {
    this.formateursItems = this.formateurService.get();
  }
}
