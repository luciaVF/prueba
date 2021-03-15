import { Component, OnInit, Input } from '@angular/core';
import { ShipsService } from '../../../services/ships.service';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor(private shipsService: ShipsService) { 
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
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
    this.starship_class = details.starship_class
  }

  abrirModificar() {
    console.log('modifico');
  }

}
