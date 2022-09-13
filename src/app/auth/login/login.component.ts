import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginDTO } from 'src/app/model/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./css/main.css', './css/util.css'],
})
export class LoginComponent implements OnInit {
  isUsernameValid = true;
  isPasswordValid = true;

  loginForm: FormGroup;

  inputsAreEmpty: boolean = true;

  loginTryFailed: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let user = new UserLoginDTO();
    user.username = String(this.loginForm.get('username')?.value);
    user.password = String(this.loginForm.get('password')?.value);

    this.authService.login(user).subscribe({
      error: () => this.handleLoginError(),
      complete: () => {
        this.authService.setUsername(user.username);
        this.switchToHome();
      },
    });
  }
  handleLoginError() {
    this.loginTryFailed = true;
  }
  switchToHome = () => {
    this.router.navigate(['/home']);
  };
  change() {
    this.loginForm.get('username')?.value != '' &&
    this.loginForm.get('password')?.value != ''
      ? (this.inputsAreEmpty = false)
      : (this.inputsAreEmpty = true);
  }
}
