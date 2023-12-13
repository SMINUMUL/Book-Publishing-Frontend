import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlesListComponent } from './components/titles/titles-list/titles-list.component';
import { PublishersListComponent } from './components/publishers/publishers-list/publishers-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TitleDashboardComponent } from './components/titles/title-dashboard/title-dashboard.component';
import { Top5TitlesComponent } from './components/titles/top-5-titles/top-5-titles.component';
import { Top5ExpensiveComponent } from './components/titles/top-5-expensive/top-5-expensive.component';
import { TitleDropdownsComponent } from './components/titles/title-dropdowns/title-dropdowns.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesListComponent,
    PublishersListComponent,
    LandingPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    TitleDashboardComponent,
    Top5TitlesComponent,
    Top5ExpensiveComponent,
    TitleDropdownsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
