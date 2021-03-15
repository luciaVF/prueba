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
  datos: any;
  @ViewChild(MatTable) tablaVehiculos: MatTable<Vehiculos>;

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {

    this.shipsService.emitVehicles$.subscribe(opcion => {
      if (opcion) {
        this.datos = opcion;
        //recogemos el subject, siempre esta disponible para actuar sobre él
      }
    });

    this.inicializarComponent();
   
  }

  inicializarComponent() {
    if (!this.datos) {  // si no está incializado el Subject , llamamos a la api q nos devuelve todos
      this.shipsService.getVehicles().subscribe((vehicles) => {
        this.datos = vehicles.results;
        console.log('VEHICLES -->', this.datos);
      })
    }
  }

  borrarFila(cod: number) {
    this.datos.splice(cod, 1);
    const datosActualizados = this.datos;
    this.tablaVehiculos.renderRows();
    this.shipsService.enviarVehicles(datosActualizados); // enviamos la lista
  }
}
