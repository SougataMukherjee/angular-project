import { Routes } from '@angular/router';
import { BlogList } from './blogs/blog-list/blog-list';
import { BlogDetail } from './blogs/blog-detail/blog-detail';

export const routes: Routes = [
  { path: '', component: BlogList },
  { path: 'blog/:id', component: BlogDetail },
];
