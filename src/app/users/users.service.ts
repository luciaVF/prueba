import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuarios } from "../../shared/modelos/usuarios";


@Injectable({
  providedIn: "root"
})
export class UsersService {

  url = 'assets/json/users.json';
  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  getUsers(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url);
    }
  }

