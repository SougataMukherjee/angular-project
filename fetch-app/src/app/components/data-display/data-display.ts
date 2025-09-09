import { Component , OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostService, Post } from '../../services/post';

@Component({
  selector: 'app-data-display',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './data-display.html',
  styleUrl: './data-display.scss'
})
export class DataDisplay implements OnInit {
private postService = inject(PostService);
  posts: Post[] = [];
  loading = true;

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data:any) => {
        this.posts = data;
        this.loading = false;
      },
      error: (err:any) => {
        console.error('Error fetching posts:', err);
        this.loading = false;
      }
    });
  }
}
