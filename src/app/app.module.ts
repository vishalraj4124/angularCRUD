import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooteerComponent } from './footeer/footeer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const appRoutes: Routes =[
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FooteerComponent,
    HeaderComponent,
    DashboardComponent
  ],
   imports:
 [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
