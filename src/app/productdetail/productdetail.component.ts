import { Component,OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  productdetail:any
  constructor(private service:StoreService,private router:ActivatedRoute){ }
 
  ngOnInit(): void {
    let id=this.router.snapshot.params["id"]
    console.log(id)
    this.service.getProductDetail(id).then((res:any)=>res.json()).then((data:any)=>this.productdetail=data)
  }

}