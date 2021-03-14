import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


// JSON
import usersList from 'src/assets/json/users.json';
import { UsersService } from '../../users/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;
  username: string;
  password: string;

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
    const user = { email: this.username, password: this.password };
    this.userService.login(user).subscribe(data => {
      console.log('nos devuelve el token');
      console.log(data);
    });
    // JSON simulando usuarios
    var userLogin = this.loginForm.value.username;
    var filterJson = this.users.filter(function (user) { return user.first_name === userLogin });
    if (filterJson.length > 0) {
      this.router.navigate(['/principal/ships'])
    } else {
      this.unregistered = true;
    }
  }
}
