import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


// JSON
import usersList from 'src/assets/json/users.json';
import { Usuarios } from '../../../shared/modelos/usuarios';
import { UsersService } from '../../users/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: Usuarios[];
  unregistered: boolean = false;
  invalid: boolean = false;
  username: string;
  password: string;
  filterJson: Usuarios;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public userService: UsersService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }


  loginUser() {
    if (this.loginForm.invalid) { return }

    //llamada a la api externa de login que nos devuelve el token del usuario
    const user = { email: this.username, password: this.password };
    var userLogin = this.loginForm.value.username;
    this.userService.login(user).subscribe(data => {
      console.log('nos devuelve el token');
      console.log(data);
    }, error => {
        //llamamos al servicio que hemos creado para consumir ese JSON
        // simulamos el login de usuarios con un Json dentro de la aplicación cuando nos falla la api (esto es solo para pruebas y que funcione la aplicacion)
        this.userService.getUsers().subscribe(response => {
          this.users = response;
          this.filterJson = this.users.find(x => x.first_name === userLogin);
          if (this.filterJson) {
            this.router.navigate(['/principal/ships'])
          } else {
            this.unregistered = true;
          }
        });
    });

 

    
   

   

   

  
    // var filterJson = this.users.filter(function (user) { return user.first_name === userLogin });
   
  }
}
