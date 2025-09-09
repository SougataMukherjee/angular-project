import { Routes } from '@angular/router';
import { Todo } from './MyComponents/todo/todo';
import { About } from './MyComponents/about/about';

export const routes: Routes = [
    {
    path: '',
    component: Todo,
   
  },{
    path: 'about',
    component: About,
   
  }
];
