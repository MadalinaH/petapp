import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { AppComponent } from './app.component';

@NgModule({

  declarations: [AppComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    MainModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
