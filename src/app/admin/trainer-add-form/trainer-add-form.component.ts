import { Component, OnInit } from '@angular/core';
import { Formateur } from '../Models/Formateur';

@Component({
  selector: 'app-trainer-add-form',
  templateUrl: './trainer-add-form.component.html',
  styleUrls: ['./trainer-add-form.component.css'],
})
export class TrainerAddFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addFormateur(formateur: Formateur) {}
}
