import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersManagementComponent } from './trainers-management.component';

describe('TrainersManagementComponent', () => {
  let component: TrainersManagementComponent;
  let fixture: ComponentFixture<TrainersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
