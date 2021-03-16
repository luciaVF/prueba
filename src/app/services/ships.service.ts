import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Ships } from '../components/ships/modelos/ships';
import { Ship } from '../components/ships/modelos/ship';
import { Vehiculos } from '../components/vehicles/modelos/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  //creamos los behaviorSubject que necesitamos para tener actualizadas las listas
  private emitShip = new BehaviorSubject<Ship>(null);
  emitShip$ = this.emitShip.asObservable();

  private emitShips = new BehaviorSubject<Ships>(null);
  emitShips$ = this.emitShips.asObservable();

  private emitVehicles = new BehaviorSubject<Vehiculos>(null);
  emitVehicles$ = this.emitVehicles.asObservable();

  urlShips: string = 'https://swapi.dev/api/starships/';
  urlVehicles: string = 'https://swapi.dev/api/vehicles/';
  urlImages: string ='https://starwars-visualguide.com/assets/img/starships/'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getShips(): Observable<Ships>{
    return this.http.get<Ships>(this.urlShips, { headers: { 'content-type': 'application/x-www-form-urlencoded' } });
  }

  getVehicles(): Observable<Vehiculos> {
    return this.http.get<Vehiculos>(this.urlVehicles).pipe(
      map(data => { return data })
    );
  }

  getImage(id: string): Observable<any> {
    return this.http.get(this.urlImages + `${id}.jpg`).pipe(
      map(data => { return data })
    );
  }

  enviarShip(emitShip) {
    this.emitShip.next(emitShip);
  }


  enviarShips(emitShips) {
    this.emitShips.next(emitShips);
  }

  enviarVehicles(emitVehicles) {
    this.emitVehicles.next(emitVehicles);
  }
}

