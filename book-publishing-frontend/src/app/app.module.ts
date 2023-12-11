import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlesListComponent } from './components/titles/titles-list/titles-list.component';
import { PublishersListComponent } from './components/publishers/publishers-list/publishers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesListComponent,
    PublishersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
