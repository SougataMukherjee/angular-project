import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from './login';
import { AuthService } from '../../core/auth.service';

describe('Login Component', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    // Create spies for AuthService and Router
    const authSpy = jasmine.createSpyObj('AuthService', ['login']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, Login], // standalone component
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routerSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard on successful login', () => {
    authServiceSpy.login.and.returnValue(true);

    component.username = 'testuser';
    component.password = 'password';
    component.onLogin();

    expect(authServiceSpy.login).toHaveBeenCalledWith('testuser', 'password');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should alert on failed login', () => {
    spyOn(window, 'alert');
    authServiceSpy.login.and.returnValue(false);

    component.username = 'wrong';
    component.password = 'wrongpass';
    component.onLogin();

    expect(authServiceSpy.login).toHaveBeenCalledWith('wrong', 'wrongpass');
    expect(window.alert).toHaveBeenCalledWith('Invalid credentials. Please try again.');
  });
});
