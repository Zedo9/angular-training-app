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
          { path: 'edit/:id', component: SessionEditFormComponent },
          { path: 'add', component: TrainerAddFormComponent },
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
  ],
  imports: [RouterModule.forChild(adminRoutes), CommonModule, FormsModule],
  bootstrap: [AdminComponent],
  providers: [FakesessionitemService],
})
export class AdminModule {}
