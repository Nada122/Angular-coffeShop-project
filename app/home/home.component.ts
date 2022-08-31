import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrdersService) {}
  fooddata:any;

  ngOnInit(): void {
    this.fooddata=this.service.orders
  }

}
