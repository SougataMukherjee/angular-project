import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private router: Router) {}
  goToProfile() {
    this.router.navigate(['profile'], { queryParams: { name: 'sam' } });
  }
  @Input() data: string = '';
  @Output() getChildData=new EventEmitter<string[]>();
  home = ['home1', 'home2', 'home3'];
  ngOnInit(){
    this.getChildData.emit(this.home)
  }
}
