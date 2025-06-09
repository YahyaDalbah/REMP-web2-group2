import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  userType: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const userData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      password_confirmation: this.passwordConfirmation,
      user_type: this.userType,
    };

    this.authService.register(userData).subscribe({
      next: (res) => {
        console.log('Registration successful:', res);
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error details:', err.error);
        alert('Registration failed!');
      },
    });
  }
}
