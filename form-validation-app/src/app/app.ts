import { Component, signal } from '@angular/core';
import { Form } from './form/form';

@Component({
  selector: 'app-root',
  imports: [Form],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('form-validation-app');
}
