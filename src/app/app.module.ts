import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';

// Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PrincipalComponent
 

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalModule,
    LoginModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
