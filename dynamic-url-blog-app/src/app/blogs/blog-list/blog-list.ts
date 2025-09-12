import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BLOGS } from '../blog-data';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="grid">
      <div class="card" *ngFor="let blog of blogs">
        <img [src]="blog.image" alt="{{blog.title}}">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.description | slice:0:60 }}...</p>
        <small>By {{ blog.author }}</small>
        <a [routerLink]="['/blog', blog.id]">Read More</a>
      </div>
    </div>
  `,
  styles: [`
    .grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(250px,1fr)); gap: 16px; padding: 20px; }
    .card { border: 1px solid #ccc; border-radius: 8px; padding: 12px; text-align: center; font-family: Arial; }
    img { width: 100%; border-radius: 6px; }
    a { display: inline-block; margin-top: 10px; color: blue; text-decoration: underline; }
  `]
})
export class BlogList {
  blogs = BLOGS;
}
