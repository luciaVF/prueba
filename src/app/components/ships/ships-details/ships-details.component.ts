import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShipsService } from '../../../services/ships.service';
import { Ship } from '../modelos/ship';
import { Ships } from '../modelos/ships';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;

  modifyForm: FormGroup;
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';
  modelo: string = '';
  starship: string = '';
  name : string = '';
  modeloEnvio: string = '';
  starshipEnvio: string = '';
  nameEnvio: string = '';
  filterShip: any;
  detalle: Ship;

  constructor(private shipsService: ShipsService,
              private fb: FormBuilder) { 
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
    };


    this.modifyForm = this.fb.group({
      modelo: ['', [Validators.required]],
      starship: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }


  getStarshipId(url: string) {

    // en caso de usar la api, implementariamos la llamada que tenems en el service pasandole el id de la nave
    // this.shipsService.getImage(this.shipId) -->le pasamos el id de la nave
    // como solo funciona para un id, las cogo de mi assets
    const ruta =  './';
    //  this.shipId = url.slice(0, -1);
    if (+url.length === 33) {
      this.shipId = url.substring(31, 32);
    } else {
      this.shipId = url.substring(31, 33);
    }
    
    const urlImage = `${this.shipId}.jpg`
    return ruta + 'assets/img/ships/imagen' + this.shipId + '.jpg';
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class;

    const detalleEnvio = new Ship();
    detalleEnvio.name = details.name;
    detalleEnvio.model = details.model;
    this.shipsService.enviarShip(detalleEnvio);  //enviamos el detalle que hemos modificado 

  }

  abrirModificar() {
    this.shipsService.emitShip$.subscribe(opcion => {
      this.detalle = opcion;  //recogemos el subject emitido del detalle
    });

    $("#modalModify").modal('show');
  }

  modificar() {
    if (this.modifyForm.valid) { // recogemos los datos modificados
      this.modeloEnvio = this.modelo;
      this.starshipEnvio = this.starship;
      this.nameEnvio = this.name;
      //recorremos la lista
      this.dataList.results.forEach(x => { // cuando encontramos la nave modificada cambiamos sus valores por los q hemos introducido
        if (x.model === this.detalle.model && x.name === this.detalle.name) {
          x.model = this.modeloEnvio;
          x.starship_class = this.starshipEnvio;
          x.name = this.nameEnvio;
        }
      })

      //enviamos la nueva lista para tenerla actualizada en el subject y que se actualicen todos los componentes que están subscritos a esta lista.
      this.shipsService.enviarShips(this.dataList);
      this.ngOnInit();
     
    }
  }

}
