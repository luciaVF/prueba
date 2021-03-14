import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuarios } from "../../shared/modelos/usuarios";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {

  url = 'assets/json/users.json';
  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  getUsers(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
    // this.cookies.delete("token"); para hacer logout
  }

  }

