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
import { PlanetsModule } from '../../planets/planets.module';
import { VehiclesModule } from '../../vehicles/vehicles.module';

@NgModule({
  declarations: [
    ShipsComponent,
    ShipsDetailsComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    PlanetsModule,
    VehiclesModule
  ]
})
export class PrincipalModule { }
