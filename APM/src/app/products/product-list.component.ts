import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Observable, range } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  theRating: number;
  productSubscription: any;
  error: any;
  constructor(private productService: ProductService) {
    this.filter = 'cart';
    this.filteredProducts = this.products;
  }

  get filter(): string {
    return this._filter;
  }

  set filter(newFilter: string) {
    this._filter = newFilter;
    this.filterProducts();
  }
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImages = false;

  private _filter: string;

  filteredProducts: Product[];
  products: Product[] = [];
  //     {
  //         productId: 1,
  //         productName: 'Leaf Rake',
  //         productCode: 'GDN-0011',
  //         releaseDate: 'March 19, 2016',
  //         description: 'Leaf rake with 48-inch wooden handle.',
  //         price: 19.95,
  //         starRating: 3.2,
  //         imageUrl: 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
  //     },
  //     {
  //         'productId': 2,
  //         'productName': 'Garden Cart',
  //         'productCode': 'GDN-0023',
  //         'releaseDate': 'March 18, 2016',
  //         'description': '15 gallon capacity rolling garden cart',
  //         'price': 32.99,
  //         'starRating': 4.2,
  //         'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  //     }
  // ];

  filterProducts(): void {
    if (this._filter) {
      this.filteredProducts = this.products.filter(product => {
        return (
          product.productName
            .toLocaleLowerCase()
            .indexOf(this.filter.toLocaleLowerCase()) !== -1
        );
      });
    } else {
      this.filteredProducts = this.products;
    }
  }

  toggleImages() {
    this.showImages = !this.showImages;
  }
  ngOnInit(): void {
    console.log('ProductListComponent.ngOnInit()');
    this.products = this.productService.getProducts();
    this.filterProducts();

    const source$ = range(0, 10);
    source$
      .pipe(
        map(x => x * 3),
        filter(x => x % 2 === 0)
      )
      .subscribe(x => console.log(x));

    this.productSubscription = this.productService
      .getProductsObservable()
      .subscribe(
        products => {
          this.products = this.filteredProducts = products;
        },
        error => (this.error = error)
      );
  }

  onNotify(rating: number) {
    this.theRating = rating;
  }
}
