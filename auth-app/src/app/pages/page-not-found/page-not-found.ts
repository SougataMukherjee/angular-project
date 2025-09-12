import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <a routerLink="/login">Go to Login</a>
  `
})
export class PageNotFound {}
