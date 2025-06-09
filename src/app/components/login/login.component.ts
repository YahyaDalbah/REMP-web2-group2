import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(userData).subscribe({
      next: (res: any) => {
        console.log(res);

        localStorage.setItem('token', res.access_token);

        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Login failed!');
        console.error(err);
      },
    });
  }
}
