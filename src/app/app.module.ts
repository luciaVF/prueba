import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';

// Components
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './register/register.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,

 

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalModule,
    LoginModule,
    HttpClientModule,
    RegisterModule,
    RouterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
