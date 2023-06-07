import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LearnersService } from 'src/app/api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private api: LearnersService ){

  }
ngOnInit(): void {
this.form= this.formBuilder.group({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
})
}

submitForm(){
this.api.logInLearner({
  body:{
    email: this.form.value.email,
    password: this.form.value.password,
  }
}).subscribe((response)=>{
  console.log(response)
})
}
}
