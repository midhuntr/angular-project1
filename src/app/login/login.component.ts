import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform=new FormGroup(
    {
      "username":new FormControl("",[Validators.required]),
      "password":new FormControl("",[Validators.required])
    }
  )
  get username(){
    return this.loginform.get("username")
  }
  get password(){
    return this.loginform.get("password")
  }


  constructor(private router:Router,private service:StoreService) { }

  handleLogin(){
    console.log(this.loginform.value);
    this.service.getToken(this.loginform.value).then(res=>res.json()).then(data=>{
      let tkn=data.token
      if(tkn){
        localStorage.setItem("token","Token "+tkn)
        this.router.navigateByUrl("products")

      }

    })
    
  }



}