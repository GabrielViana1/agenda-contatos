import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { appRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {  BrowserAnimationsModule  }  from  "@angular/platform-browser/animations" ; 
import  {  NgxSpinnerModule  }  from  "ngx-spinner" ;
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CreateContactComponent } from './components/admin/create-contact/create-contact.component';
import { ListContactsComponent } from './components/admin/list-contacts/list-contacts.component';
import { EditContactsComponent } from './components/admin/edit-contact/edit-contacts.component';
import { ChartModule } from 'angular-highcharts';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    CreateContactComponent,
    ListContactsComponent,
    EditContactsComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule, //Importamos o módulo appRoutingModule.
    ReactiveFormsModule, //Importamos o módulo ReactiveFormsModule, que é necessário para trabalhar com formulários reativos.
    FormsModule, //Importamos o módulo FormsModule, que é necessário para trabalhar com formulários de modelo.
    BrowserAnimationsModule, //Importamos o módulo BrowserAnimationsModule, que é necessário para trabalhar com animações.
    NgxSpinnerModule, //Importamos o módulo NgxSpinnerModule, que é necessário para trabalhar com o spinner.
    HttpClientModule, //Importamos o módulo HttpClientModule, que é necessário para trabalhar com requisições HTTP.
    ChartModule,
    NgxMaskModule.forRoot() //Importamos o NGX-MASK para poder usar em todos os módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
