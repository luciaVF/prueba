import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Components
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './register/register.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VehiclesModule } from './components/vehicles/vehicles.module';
import { PlanetsModule } from './components/planets/planets.module';
import { PreviousRouteService } from '../shared/navegation/previous-route.service';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    PrincipalModule,
    LoginModule,
    HttpClientModule,
    RegisterModule,
    RouterModule,
    BrowserAnimationsModule,
    VehiclesModule,
    PlanetsModule


  ],
  providers: [PreviousRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
