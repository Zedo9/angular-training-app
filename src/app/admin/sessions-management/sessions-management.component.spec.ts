import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsManagementComponent } from './sessions-management.component';

describe('SessionsManagementComponent', () => {
  let component: SessionsManagementComponent;
  let fixture: ComponentFixture<SessionsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
