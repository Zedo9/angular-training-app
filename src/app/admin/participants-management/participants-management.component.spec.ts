import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsManagementComponent } from './participants-management.component';

describe('ParticipantsManagementComponent', () => {
  let component: ParticipantsManagementComponent;
  let fixture: ComponentFixture<ParticipantsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
