import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeFormateurServiceService } from '../fake-formateur-service.service';
import { Formateur } from '../Models/Formateur';

@Component({
  selector: 'app-trainers-edit-form',
  templateUrl: './trainers-edit-form.component.html',
  styleUrls: ['./trainers-edit-form.component.css'],
})
export class TrainersEditFormComponent implements OnInit {
  id;
  private sub: any;
  formateur: Formateur;
  constructor(
    private route: ActivatedRoute,
    private formateurService: FakeFormateurServiceService,
    private router: Router
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
    this.formateur = this.formateurService.getFormateur(this.id);
  }

  ngOnInit(): void {}

  editFormateur(formateur) {
    this.router.navigateByUrl('admin/formateurs/list');
  }
}
