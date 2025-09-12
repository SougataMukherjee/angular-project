import { Component, signal } from '@angular/core';
import { FormComponent } from './form/form';

@Component({
  selector: 'app-root',
  imports: [FormComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('form-validation-app');
}
