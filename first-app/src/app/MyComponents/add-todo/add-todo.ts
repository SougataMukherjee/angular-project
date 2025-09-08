import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './add-todo.html',
  styleUrls: ['./add-todo.scss']
})
export class AddTodo {
  title: string = "";
  desc: string = "";
  @Output() todoAdd:EventEmitter<any>=new EventEmitter()
  onSubmit(){
    const todo={
      sno:Math.floor(Math.random() * 1000),
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo)
    this.title = "";
    this.desc = "";
  }

}
