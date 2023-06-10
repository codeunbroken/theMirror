import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LearnersService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/base/base.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent{
  loading: boolean = false;
  form: FormGroup;

  constructor(
    data: DataService,
    router: Router,
    private auth: AuthService,
    private notify: NotificationService,
    private api: LearnersService,
    private formBuilder: FormBuilder
  ) {
    super(data, router);
  }

ngOnInit(): void {
  super.ngOnInit()
this.form= this.formBuilder.group({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
})
}

submitForm(){
  this.loading = true
this.api.logInLearner({
  body:{
    email: this.form.value.email,
    password: this.form.value.password,
  }
}).subscribe((res)=> {
  this.auth.saveAuthentication(res)
  const id: any = this.auth.getUserId()
  this.api.getLearner({learnerId: id.jti}).subscribe((res)=> {
    this.loading = false
    this.notify.success('login successful')
    this.message.user = res
    this.data.changeMessage(this.message)
    this.router.navigateByUrl('/home')
  })
}, (error) => {
  this.loading = false
  this.notify.error(error.message)
})
}
}
