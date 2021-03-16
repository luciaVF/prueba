import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// Components
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { ShipsDetailsComponent } from '../ships/ships-details/ships-details.component';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { PlanetsModule } from '../planets/planets.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShipDefinitivoComponent } from '../ship-definitivo/ship-definitivo.component';
import { PreviousRouteService } from '../../../shared/navegation/previous-route.service';

@NgModule({
  declarations: [
    ShipsComponent,
    ShipsDetailsComponent,
    PageOneComponent,
    PageTwoComponent,
    ShipDefinitivoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    PlanetsModule,
    VehiclesModule
  ],
  providers: [PreviousRouteService]
})
export class PrincipalModule { }
