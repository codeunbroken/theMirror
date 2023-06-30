import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ForumService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/base/base.component';
import { DataService } from 'src/app/services/data.service';
import {v4} from 'uuid'

@Component({
  selector: 'app-reply-component',
  templateUrl: './reply-component.component.html',
  styleUrls: ['./reply-component.component.css'],
})
export class ReplyComponentComponent extends BaseComponent {
  forumId: any;
  form: FormGroup
  posts$ : Observable<any>
  constructor( data: DataService, router: Router, private route: ActivatedRoute, private api: ForumService, private formBuilder: FormBuilder) {
    super(data, router)
  }
  ngOnInit(): void {
    super.ngOnInit()
    this.route.params.subscribe((param) => {
       this.forumId = param.forumId;
      this.posts$=this.api.getAllPostsByForumId({
        forumId:param.forumId
      })
    });
    this.form=this.formBuilder.group({
      postMessage: new FormControl('')
    })
  }


  postComment(){
    this.api.createPost(
      {
        postId: v4(),
        body: {
          forumId: this.forumId,
          ...this.form.value
        }
      }
    ).subscribe((res)=>{
      console.log(res);

    })
  }
}
