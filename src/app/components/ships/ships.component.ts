import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
import { PreviousRouteService } from '../../../shared/navegation/previous-route.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];
  

  constructor(private shipsService: ShipsService,
    private previousRoute: PreviousRouteService,) { }

  ngOnInit(): void {
    this.shipsService.emitShips$.subscribe(opcion => {
      if (opcion) {
        this.dataList = opcion;  //recogemos el subject emitido del detalle
      } else {
        this.shipsService.getShips().subscribe((ships) => {
          this.dataList = ships;
          console.log('SHIPS -->', this.dataList.results)
        })
      }
    });

    // esta parte la habia creado para recoger la url y llamar al subject , pero no hace falta 
    /*if (this.previousRoute.getPreviousUrl().includes('/principal/shipsDefinitivo')) {
        // sacamos los datos del obervable, no hacemos la llamada al servicio para seguir con los datos que teniamos modificados
      this.shipsService.emitShips$.subscribe(opcion => {
        if (opcion) {
          this.dataList = opcion;  //recogemos el subject emitido del detalle
        } else {
          this.shipsService.getShips().subscribe((ships) => {
            this.dataList = ships;
            console.log('SHIPS -->', this.dataList.results)
          })
        }
      });

    } else {
      this.shipsService.getShips().subscribe((ships) => {
        this.dataList = ships;
        console.log('SHIPS -->', this.dataList.results)
      })
    }*/
    
    }
}
