import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { PrincipalComponent } from './principal.component';
import { VehiclesComponent } from '../vehicles/vehicles.component';
import { PlanetsComponent } from '../planets/planets.component';
import { ShipDefinitivoComponent } from '../ship-definitivo/ship-definitivo.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent,
  children: [
    { path: 'ships', component: ShipsComponent },
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: 'shipsDefinitivo', component: ShipDefinitivoComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule { }
