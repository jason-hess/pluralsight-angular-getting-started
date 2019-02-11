import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  timer: NodeJS.Timeout;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.timer = setTimeout(() => this.router.navigate(['/products']), 500);
  }
}
