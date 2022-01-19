import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
import { WlpItemCardComponent } from './components';

// material imports
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, WlpItemCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //
    MatDividerModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
