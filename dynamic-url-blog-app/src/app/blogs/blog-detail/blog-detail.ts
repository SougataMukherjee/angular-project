import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BLOGS } from '../blog-data';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="blog" class="detail">
      <img [src]="blog.image" alt="{{blog.title}}">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.description }}</p>
      <small>By {{ blog.author }}</small>
      <br /><br />
      <a routerLink="/">⬅ Back to Blogs</a>
    </div>
    <p *ngIf="!blog">Blog not found</p>
  `,
  styles: [`
    .detail { max-width: 600px; margin: auto; font-family: Arial; padding: 20px; text-align: center; }
    img { width: 100%; border-radius: 8px; }
    a { color: blue; }
  `]
})
export class BlogDetail implements OnInit {
  private route = inject(ActivatedRoute);
  blog: any;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = BLOGS.find(b => b.id === id);
  }
}
