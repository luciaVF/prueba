
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import usersList from 'src/assets/json/users.json';
import { Usuarios } from '../../../shared/modelos/usuarios';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: Usuarios;
  users: Usuarios[];
  dataLoading: boolean = false;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [ '', [Validators.required, Validators.minLength(3)]],
      lastName: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    })
  }

  registerUser() {
    if (this.registerForm.invalid) { return }

    // componemos la propiedad tipo Usuario
    this.user = {
      first_name: this.firstName,
      last_name: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password
    };
    //como para usar la api de registro solo vamos a necesitar dos propiedades , email y password, nos creamos un objeto para pasar los datos
    const userRegister = { email: this.email, password: this.password };
    this.userService.register(userRegister).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigate(['/principal/ships']);
    }, error => {
      // simulamos el registro de usuarios con un Json dentro de la aplicación cuando nos falla la api (esto es solo para pruebas y que funcione la aplicacion)
      this.userService.getUsers().subscribe(response => {
        this.users = response;
        //Añadimos a la lista de usuarios registrados, el nuevo usuario.
        this.users.push(this.user);
        console.log('User Register -->', this.users)
        this.router.navigate(['/principal/ships']);
      });
    });
   
  }

}
