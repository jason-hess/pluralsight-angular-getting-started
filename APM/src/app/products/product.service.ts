import { Product } from './product';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(
    private globalService: GlobalService,
    private httpClient: HttpClient
  ) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getProductObservable(productId: number): Observable<Product> {
    return this.httpClient.get<Product[]>('api/products/products.json').pipe(
      retry(3),
      map(products => {
        return products.find(product => product.productId == productId);
    }));
  }

  getProductsObservable(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>('api/products/products.json')
      .pipe(retry(3));
  }

  getId() {
    return this.globalService.getNumber();
  }

  getProducts(): Product[] {
    return [
      {
        productId: 1,
        productName: 'Leaf Rake 2019',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2016',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 3.2,
        imageUrl:
          'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
      },
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2016',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl:
          'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      }
    ];
  }
}
