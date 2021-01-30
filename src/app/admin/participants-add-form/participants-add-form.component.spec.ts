import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsAddFormComponent } from './participants-add-form.component';

describe('ParticipantsAddFormComponent', () => {
  let component: ParticipantsAddFormComponent;
  let fixture: ComponentFixture<ParticipantsAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
