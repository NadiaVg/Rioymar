import { Component, OnInit } from '@angular/core';
import productsList from 'src/assets/json/products.json';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  Products: any = productsList;

  constructor() { }

  ngOnInit(): void {
  }

}
