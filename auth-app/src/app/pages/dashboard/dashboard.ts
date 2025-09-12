import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Dashboard</h2>
    <p>Welcome! You are logged in.</p>
    <button (click)="logout()">Logout</button>
  `
})
export class Dashboard {
  constructor(private auth: AuthService) {}
  logout() {
    this.auth.logout();
  }
}
