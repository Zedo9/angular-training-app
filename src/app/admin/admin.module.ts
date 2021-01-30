import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SessionsManagementComponent } from './sessions-management/sessions-management.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { FakesessionitemService } from './fakesessionitem.service';
import { TrainersManagementComponent } from './trainers-management/trainers-management.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';
import { TrainerAddFormComponent } from './trainer-add-form/trainer-add-form.component';
import { TrainersEditFormComponent } from './trainers-edit-form/trainers-edit-form.component';
import { ParticipantsManagementComponent } from './participants-management/participants-management.component';
import { ParticipantsAddFormComponent } from './participants-add-form/participants-add-form.component';
import { ParticipantsEditFormComponent } from './participants-edit-form/participants-edit-form.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardMainComponent },
      {
        path: 'sessions',
        component: SessionsManagementComponent,
        children: [
          { path: 'list', component: SessionItemListComponent },
          { path: 'edit/:id', component: SessionEditFormComponent },
          { path: 'add', component: SessionAddFormComponent },
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'formateurs',
        component: TrainersManagementComponent,
        children: [
          { path: 'list', component: TrainersListComponent },
          { path: 'edit/:id', component: TrainersEditFormComponent },
          { path: 'add', component: TrainerAddFormComponent },
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'participants',
        component: ParticipantsManagementComponent,
        children: [
          { path: 'list', component: ParticipantsListComponent },
          { path: 'edit/:id', component: ParticipantsEditFormComponent },
          { path: 'add', component: ParticipantsAddFormComponent },
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
        ],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  declarations: [
    AdminComponent,
    SessionItemComponent,
    SessionItemListComponent,
    SessionAddFormComponent,
    SessionEditFormComponent,
    SessionsManagementComponent,
    DashboardMainComponent,
    TrainersManagementComponent,
    TrainersListComponent,
    TrainerAddFormComponent,
    TrainersEditFormComponent,
    ParticipantsManagementComponent,
    ParticipantsAddFormComponent,
    ParticipantsEditFormComponent,
    ParticipantsListComponent,
  ],
  imports: [RouterModule.forChild(adminRoutes), CommonModule, FormsModule],
  bootstrap: [AdminComponent],
  providers: [FakesessionitemService],
})
export class AdminModule {}
