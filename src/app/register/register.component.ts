import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form=new FormGroup(
    {
      username:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]) 
    }
  )

  get username(){
    return this.form.get("username")
  }
  get email(){
    return this.form.get("email")
  }
  get password(){
    return this.form.get("password")
  }

  signup(){
    console.log(this.form.value);
    
  }

}