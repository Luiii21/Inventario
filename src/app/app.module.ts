import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';

// Components
import {DataFilterComponent} from './components/data-filter/data-filter.component';
import {DataCreateComponent} from './components/data-filter/data-create/data-create.component';
import {DataPanelComponent} from './components/data-filter/data-panel/data-panel.component';

import {HomeComponent} from './components/home/home.component';

// Modules
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DataCardComponent} from './shared/components/data-card/data-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataFilterComponent,
    DataCreateComponent,
    DataPanelComponent,
    HomeComponent,
    DataCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
