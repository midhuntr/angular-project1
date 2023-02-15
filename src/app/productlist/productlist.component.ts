import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:any
  constructor(private service:StoreService,private router:Router){

  }
  ngOnInit(): void {
   this.service.getAllProducts().then((res:any)=>res.json()).then((data:any)=>this.products=data)
   
  }
  redirectToProductDetail(id:any){
    this.router.navigate(["products/",id])
  }

}