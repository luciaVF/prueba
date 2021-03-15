import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ShipsService } from '../../services/ships.service';
import { Vehiculo } from './modelos/vehiculo';
import { Vehiculos } from './modelos/vehiculos';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  columnas: string[] = ['modelo', 'fabricante', 'tipo', 'nombre', 'tripulacion','iconos'];
  // dataSource = new MatTableDataSource<Vehiculo>();
  datos: Vehiculos;
  @ViewChild(MatTable) tablaVehiculos: MatTable<Vehiculos>;

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.shipsService.getVehicles().subscribe((vehicles) => {
      this.datos = vehicles.results;
      console.log('VEHICLES -->', this.datos);
    })
  }

  borrarFila(cod: number) {
    this.datos.splice(cod, 1);
    this.tablaVehiculos.renderRows();
  }
}
