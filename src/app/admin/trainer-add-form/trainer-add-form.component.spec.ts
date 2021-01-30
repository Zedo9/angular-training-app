import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAddFormComponent } from './trainer-add-form.component';

describe('TrainerAddFormComponent', () => {
  let component: TrainerAddFormComponent;
  let fixture: ComponentFixture<TrainerAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
