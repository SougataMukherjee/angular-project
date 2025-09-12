import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  userName: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // let name=this.route.snapshot.paramMap.get('name');
    // this.userName=name

    this.route.queryParams.subscribe((params) => {
      this.userName=params['name']
    });
    this.getChildData.emit(this.profile)
  }
  @Input() data:string=''
  @Output() getChildData=new EventEmitter<string[]>();
  profile=['profile1','profile2','profile3']
  
}
