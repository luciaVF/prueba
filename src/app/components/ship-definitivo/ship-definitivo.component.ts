import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../../services/ships.service';
import { Ships } from '../ships/modelos/ships';

@Component({
  selector: 'app-ship-definitivo',
  templateUrl: './ship-definitivo.component.html',
  styleUrls: ['./ship-definitivo.component.scss']
})
export class ShipDefinitivoComponent implements OnInit {
  dataList: any = [];
  config: any;
  shipId: string = '';
  url: string = '';
  mostrarMensaje: boolean = false;


  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    //obtenemos la lista modificada por el padre
    /**Behaviour Subject nos permite utilizar una característica realmente útil y que es la de poder "recodar¨ el último valor emitido por el Observable a todas las nuevas subscripciones, al margen del momento temporal en que éstas se establezcan, actuando como un mencanismo de "sincronización" entre todas**/
    this.shipsService.emitShips$.subscribe(opcion => {
      if (opcion) {
        this.dataList = opcion.results;    //recogemos el subject, siempre esta disponible para actuar sobre él
      }
    });

    if (this.dataList.length > 0) {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
    } else {
      this.mostrarMensaje = true;
    }
   
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  getStarshipId(url: string) {

    // en caso de usar la api, implementariamos la llamada que tenems en el service pasandole el id de la nave
    // this.shipsService.getImage(this.shipId) -->le pasamos el id de la nave
    // como solo funciona para un id, las cogo de mi assets
    const ruta = './';
    //  this.shipId = url.slice(0, -1);
    if (+url.length === 33) {
      this.shipId = url.substring(31, 32);
    } else {
      this.shipId = url.substring(31, 33);
    }

    const urlImage = `${this.shipId}.jpg`
    return ruta + 'assets/img/ships/imagen' + this.shipId + '.jpg';
  }

}
