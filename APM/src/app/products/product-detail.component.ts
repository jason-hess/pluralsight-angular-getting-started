import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: Product;
  subscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.productService
      .getProductObservable(this.productId)
      .subscribe(product => this.product = product);
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}
