import { Component, OnInit } from '@angular/core';
import {products} from '../products'; //import products.ts

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products; //export products
  constructor() { }

  ngOnInit() {
  }
  //buat method bagikan dipanggil dengan tombol
  bagikan() {
    window.alert("Produk telah dibagikan");
  }
}
