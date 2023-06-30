import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ForumService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/base/base.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-all-forums',
  templateUrl: './all-forums.component.html',
  styleUrls: ['./all-forums.component.css']
})
export class AllForumsComponent extends BaseComponent {
  color: any;
  letters: any = '0123456789ABCDEF';
  forums$ : Observable<any>


constructor(data: DataService,  router: Router, private api: ForumService,  private auth: AuthService){
  super(data, router)
}
ngOnInit() {
  super.ngOnInit()
  const id:any= this.auth.getUserId()
  this.forums$ = this.api.getForumsByUserId({
    userId:id.jti
  })
}
  getRandomColor() {
    this.color = '#';
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color;
  }

  view(item: any){
    this.message.forum=item
    this.data.changeMessage(this.message)
    this.router.navigate(['forum', item.forumId])
  }
}

