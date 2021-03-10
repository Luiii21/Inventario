import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DataPanelComponent } from './components/data-panel/data-panel.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DataCardComponent } from './shared/components/data-card/data-card.component';
import { DataCreateComponent } from './components/data-create/data-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataPanelComponent,
    NavbarComponent,
    DataCardComponent,
    DataCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
