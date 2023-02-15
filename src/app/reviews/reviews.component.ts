import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews:any
  @Input()
  pid:any=""
    constructor(private service:StoreService){ }

    ngOnInit(): void {
      if(this.pid){
        console.log(this.pid);
        this.service.getProductReviews(this.pid).then((res:any)=>res.json()).then(data=>this.reviews=data)
        console.log(this.reviews);
      }
      
      
      
    }
}