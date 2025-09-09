import { Component,Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.scss']
})
export class TodoItem {
  @Input() todo!: { sno: number; title: string; desc: string; active: boolean }
  @Output() todoDelete:EventEmitter<any>=new EventEmitter()
  onClick(todo:{ sno: number; title: string; desc: string; active: boolean }){
    this.todoDelete.emit(todo)
    console.log(todo);
  }
}
