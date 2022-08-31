import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.css']
})
export class SingleMenuComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrdersService) { }
  getMenuId:any;
  menuData:any;
  ngOnInit(): void {
    this.getMenuId=this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId){
      
    this.menuData= this.service.orders.filter((value)=>{
      return value.id==this.getMenuId;
      }
     )
    }
  }

}
