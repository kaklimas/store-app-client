import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { UserRegisterDTO } from './../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./css/main.css', './css/util.css']
})
export class RegisterComponent implements OnInit {

  isUsernameValid = true;
  isPasswordValid = true;

  registerForm = new FormGroup({
    username: new FormControl('',
      Validators.required
      ),
    email: new FormControl('',
      Validators.required
      ),
    password: new FormControl('',
      Validators.required
      ),
    passwordConfirm: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // validate inputs
  
    let user = new UserRegisterDTO();
    user.username = String(this.registerForm.get('username')?.value);
    user.password = String(this.registerForm.get('password')?.value);
    user.email = String(this.registerForm.get('email')?.value);      

    this.authService.register(user)
      .subscribe({
        error: (err) => this.handleRegisterError(err),
        complete: () => this.switchToHome()
      })
  }
  handleRegisterError(error:any) {

  }
  switchToHome = () => this.router.navigate(['/home']) 
}
