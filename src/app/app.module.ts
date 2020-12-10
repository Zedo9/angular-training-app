import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './components/session-item/session-item.component';
import { SessionItemListComponent } from './components/session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
