import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Quote } from './components/quote/quote';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, Navbar, Quote],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rxjs-quote-app');
}
