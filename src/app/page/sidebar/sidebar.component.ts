import { Component, Input, OnInit } from '@angular/core';
import { ForumService } from 'src/app/api/services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  color: any;
  letters: any = '0123456789ABCDEF';

  constructor(private api:ForumService, private auth:AuthService){

  }

  ngOnInit() {
    const id:any= this.auth.getUserId()
    this.api.getForumsByUserId({
      userId:id.jti
    }).subscribe((res)=>console.log(res)
    )
  }

  getRandomColor() {
    this.color = '#';
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color;
  }
}
