import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  constructor(private service:OrdersService) {}
  fooddata:any;

  ngOnInit(): void {
    this.fooddata=this.service.orders
  }

}

