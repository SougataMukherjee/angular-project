import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';
  private userKey = 'users'; 

  constructor(private router: Router) {}

  signup(username: string, password: string) {
    const users: User[] = JSON.parse(localStorage.getItem(this.userKey) || '[]');
    users.push({ username, password });
    localStorage.setItem(this.userKey, JSON.stringify(users));
  }

  login(username: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem(this.userKey) || '[]');
    const found = users.find(u => u.username === username && u.password === password);

    if (found) {
      const fakeToken = 'token-' + Date.now();
      localStorage.setItem(this.tokenKey, fakeToken);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
