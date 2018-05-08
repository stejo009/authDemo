import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';
import { ServerloginService } from './serverlogin.service';
import { ServerstateTableService } from './serverstate-table.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    SiginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServerloginService, ServerstateTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
