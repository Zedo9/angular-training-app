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
}
