import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Signup</h2>
    <form (ngSubmit)="onSignup()">
      <input [(ngModel)]="username" name="username" placeholder="Username" required>
      <input [(ngModel)]="password" type="password" name="password" placeholder="Password" required>
      <button type="submit">Signup</button>
    </form>
    <p>Already have an account? <a routerLink="/login">Login</a></p>
  `
})
export class Signup {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSignup() {
    this.auth.signup(this.username, this.password);
    alert('Signup successful! Please login.');
    this.router.navigate(['/login']);
  }
}
