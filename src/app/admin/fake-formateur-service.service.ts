import { Injectable } from '@angular/core';
import { FORMATEURS } from './Data/formateurs';

@Injectable({
  providedIn: 'root',
})
export class FakeFormateurServiceService {
  constructor() {}
  get() {
    return FORMATEURS;
  }
  delete(formateur) {
    let index;
    index = FORMATEURS.indexOf(formateur);
    if (FORMATEURS.indexOf(formateur) >= 0) {
      FORMATEURS.splice(index, 1);
    }
  }

  add(formateur) {
    formateur.id = FORMATEURS.length + 1;
    FORMATEURS.push(formateur);
  }

  getFormateur(id: number) {
    return FORMATEURS[id - 1];
  }
}
