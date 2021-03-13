import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrincipalModule } from '../components/principal/principal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
