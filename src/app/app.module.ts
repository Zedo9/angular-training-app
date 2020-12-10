import { NgModule } from '@angular/core';
import {AdminComponent} from "./admin/admin/admin.component"
import { AppComponent } from './app.component';
import { SessionItemComponent } from './components/session-item/session-item.component';
import { SessionItemListComponent } from './components/session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AppModule { }
