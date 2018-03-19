import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item col-md-4';
  constructor() { }

  ngOnInit() {
  }

}
