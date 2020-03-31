import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UvCardComponent } from './uv-card/uv-card.component';
import { FormsModule } from '@angular/forms';
import { UvCounterComponent } from './uv-counter/uv-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UvCardComponent,
    UvCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
