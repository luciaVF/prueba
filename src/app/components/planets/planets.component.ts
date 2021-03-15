import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PlanetsService } from '../../services/planets.service';
import { Planeta } from './modelos/planeta';
import { Planetas } from './modelos/planetas';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  columnas: string[] = ['nombre', 'clima', 'diametro', 'terreno','poblacion'];
  dataSource = new MatTableDataSource<Planeta>();
  datos: Planetas;
  @ViewChild(MatTable) tablaPlanetas: MatTable<Planetas>;
  public dataList: any = [];
  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.planetsService.getPlanets().subscribe((planetas) => {
      this.datos = planetas.results;
      console.log('PLANETS -->', this.datos);
    })
  }
}
