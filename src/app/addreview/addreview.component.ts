import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { StoreService } from '../service/store.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent {

  @Input() proid=""

  reviewForm=new FormGroup(
    {
      "comment":new FormControl("",[Validators.required]),
      "rating":new FormControl("",[Validators.required])
    }
  )
  get comment(){
    return this.reviewForm.get("comment")
  }
  get rating(){
    return this.reviewForm.get("rating")
  }

  constructor(private service:StoreService,private router:Router) { }

  postReview(){
    console.log(this.reviewForm.value);
    console.log(this.proid);
    
    this.service.addProductReview(this.reviewForm.value,this.proid).then((res:any)=>res.json()).then(data=>console.log(data))
    

  }

}