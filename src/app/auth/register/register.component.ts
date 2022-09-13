import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserRegisterDTO } from './../../model/user';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./css/main.css', './css/util.css'],
})
export class RegisterComponent implements OnInit {
  isUsernameValid = true;
  isPasswordValid = true;

  registerForm: FormGroup;

  registerTryFailed: boolean = false;

  inputsAreEmpty: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let user = new UserRegisterDTO();
    user.username = this.getUsername();
    user.password = this.getPassword();
    user.email = this.getEmail();

    this.authService.register(user).subscribe({
      error: () => this.handleRegisterError(),
      complete: () => this.switchToHome(),
    });
  }
  handleRegisterError() {
    this.registerTryFailed = true;
  }
  switchToHome = () => this.router.navigate(['/home']);

  change() {
    this.getUsername() != '' &&
    this.getPassword() != '' &&
    this.getEmail() != '' &&
    this.getPasswordConfirm() != ''
      ? (this.inputsAreEmpty = false)
      : (this.inputsAreEmpty = true);
  }

  private getUsername() {
    return String(this.registerForm.get('username')?.value);
  }
  private getEmail() {
    return String(this.registerForm.get('email')?.value);
  }
  private getPassword() {
    return String(this.registerForm.get('password')?.value);
  }
  private getPasswordConfirm() {
    return String(this.registerForm.get('passwordConfirm')?.value);
  }
}
