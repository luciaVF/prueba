import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];
  

  constructor( private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((ships) => {
      this.dataList = ships;
      this.shipsService.enviarShips(this.dataList); // enviamos el juego de datos y lo alamcenamos en el subject.
      console.log('SHIPS -->', this.dataList.results)
    })
  }
}
