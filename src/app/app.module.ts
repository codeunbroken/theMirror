import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'primeng/tree';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './page/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from './api/api.module';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    InputTextModule,
    PasswordModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ApiModule.forRoot({rootUrl: "https://api.themirrorllc.com"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
