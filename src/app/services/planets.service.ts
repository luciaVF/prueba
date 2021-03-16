import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Planetas } from '../components/planets/modelos/planetas';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  urlPlanets: string = 'https://swapi.dev/api/planets/';

  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planetas> {
    return this.http.get<Planetas>(this.urlPlanets).pipe(
      map(data => { return data })
    );
  }

}
