import { forwardRef, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'primeng/tree';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './page/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './interceptor/jwt.interceptor';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => JwtInterceptor),
  multi: true
};


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
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      progressAnimation: 'decreasing',
      progressBar: true
    }),
    ApiModule.forRoot({ rootUrl: environment.apiUrl }),
  ],

  providers: [
    JwtInterceptor,
    API_INTERCEPTOR_PROVIDER,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
