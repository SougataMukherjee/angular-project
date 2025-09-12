import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Signup } from './signup';
import { AuthService } from '../../core/auth.service';

describe('Signup Component', () => {
  let component: Signup;
  let fixture: ComponentFixture<Signup>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['signup']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [Signup, CommonModule, FormsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Signup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.signup and navigate to /login on signup', () => {
    // arrange
    component.username = 'testuser';
    component.password = 'password123';

    // spy on alert to avoid popup
    spyOn(window, 'alert');

    // act
    component.onSignup();

    // assert
    expect(mockAuthService.signup).toHaveBeenCalledOnceWith('testuser', 'password123');
    expect(window.alert).toHaveBeenCalledWith('Signup successful! Please login.');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
