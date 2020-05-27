import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ViewQueueComponent } from './view-queue/view-queue.component';
import { CoreModule } from './shared/core.module';

import { FormLoginModule } from './form-login/form-login-module';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewQueueComponent,
    HeaderComponent,
     


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
