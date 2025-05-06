import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule


import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Remove AppComponent from declarations
    // ⚠️ Do not include ReviewPageComponent here if it's standalone
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent // Import AppComponent here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }