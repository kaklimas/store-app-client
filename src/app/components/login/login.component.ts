import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginDTO } from 'src/app/model/user';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./css/main.css', './css/util.css']
})
export class LoginComponent implements OnInit {

  isUsernameValid = true;
  isPasswordValid = true;

  loginForm = new FormGroup({
    username: new FormControl('',
      Validators.required
      ),
    password: new FormControl('',
      Validators.required
      )
  })

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // validate

    let user = new UserLoginDTO();
    user.username = String(this.loginForm.get('username')?.value);
    user.password = String(this.loginForm.get('password')?.value);

    this.authService.login(user)
      .subscribe({
        error: (err) => this.handleRegisterError(err),
        complete: () => {
          this.authService.setUsername(user.username)
          this.switchToHome()
        }
      })
  }
  handleRegisterError(error:any) {

  }
  switchToHome = () => {
    this.router.navigate(['/home'])
  } 
}
