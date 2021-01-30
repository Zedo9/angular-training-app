import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeFormateurServiceService } from '../fake-formateur-service.service';
import { Formateur } from '../Models/Formateur';

@Component({
  selector: 'app-trainer-add-form',
  templateUrl: './trainer-add-form.component.html',
  styleUrls: ['./trainer-add-form.component.css'],
})
export class TrainerAddFormComponent implements OnInit {
  constructor(
    private formateurService: FakeFormateurServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addFormateur(formateur: Formateur) {
    this.formateurService.add(formateur);
    this.router.navigateByUrl('admin/formateurs/list');
  }
}
