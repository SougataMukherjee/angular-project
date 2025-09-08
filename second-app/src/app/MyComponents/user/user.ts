import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  count: number = 1;
  name:string|number='';
  nameInput = '';
  onIncrement(){
    this.count++
  }
  onReset(){
    this.count=0
  }
  onDecrement(){
    this.count--
  }
  handleEvent(e:MouseEvent){
    console.log(e,e.type);
  }
  handleInput(e:InputEvent){
    const target = e.target as HTMLInputElement;
    const value=target.value;
    this.name=value;
    console.log(target.value,e.type)
    
  }
  showValue() {
    this.name = this.nameInput;
  }
  handleFocus(e:FocusEvent){
    console.log('focus on input',e.type)
  }
  handleBlur(e:FocusEvent){
    console.log('focus out from input',e.type)
  }
}
