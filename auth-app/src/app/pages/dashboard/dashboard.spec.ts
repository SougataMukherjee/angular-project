import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';
import { AuthService } from '../../core/auth.service';

// Create a fake AuthService for testing
class MockAuthService {
  logout = jasmine.createSpy('logout');
}

describe('Dashboard Component', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;
  let authService: MockAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard], // standalone component
      providers: [{ provide: AuthService, useClass: MockAuthService }]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as unknown as MockAuthService;
    fixture.detectChanges();
  });

  it('should create the Dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title "Dashboard"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Dashboard');
  });

  it('should render welcome text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Welcome! You are logged in.');
  });

  it('should call authService.logout when logout() is called', () => {
    component.logout();
    expect(authService.logout).toHaveBeenCalled();
  });

  it('should call logout when logout button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button')!;
    button.click();
    expect(authService.logout).toHaveBeenCalled();
  });
});
