import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, tap } from 'rxjs';
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
  commentForm: FormGroup
  posts$ : Observable<any>
  loading: boolean = true
  moment = moment
  id: any
  date = new Date()
  constructor( data: DataService, router: Router, private route: ActivatedRoute, private api: ForumService, private formBuilder: FormBuilder) {
    super(data, router)
  }
  ngOnInit(): void {
    super.ngOnInit()
    this.route.params.subscribe((param) => {
       this.forumId = param.forumId;
      this.posts$=this.api.getAllPostsByForumId({
        forumId:param.forumId
      }).pipe(tap((res)=>{
        this.loading=false
      }))
    });
    this.form=this.formBuilder.group({
      postMessage: new FormControl('')
    })
    this.commentForm=this.formBuilder.group({
      response: new FormControl('')
    })
  }


  postComment(){
    this.loading=true
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
      this.getPost()
    })
  }

  respond(item:any){
    this.loading=true
    this.api.respondToPost({
      postId: item,
      body: this.commentForm.value
    }).subscribe((res)=> {
      console.log(res);
      this.getPost()

    })
  }

  open(item:any){
    this.id = item.postId
  }

  getPost(){
    this.posts$=this.api.getAllPostsByForumId({
      forumId:this.forumId
    }).pipe(tap((res)=>{
      this.loading=false
    }))
  }
}
