import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  urlShips: string = 'https://swapi.dev/api/starships/';
  urlVehicles: string = 'https://swapi.dev/api/vehicles/';
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getShips(): Observable<any>{
    return this.http.get(this.urlShips).pipe( 
      map( data => { return data })
      );
  }

  getVehicles(): Observable<any> {
    return this.http.get(this.urlVehicles).pipe(
      map(data => { return data })
    );
  }
}
