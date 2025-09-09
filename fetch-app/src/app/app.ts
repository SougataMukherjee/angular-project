import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDisplay } from './components/data-display/data-display';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,DataDisplay],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fetch-app');
}
