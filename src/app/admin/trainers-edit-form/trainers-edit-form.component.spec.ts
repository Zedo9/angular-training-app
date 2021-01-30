import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersEditFormComponent } from './trainers-edit-form.component';

describe('TrainersEditFormComponent', () => {
  let component: TrainersEditFormComponent;
  let fixture: ComponentFixture<TrainersEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
