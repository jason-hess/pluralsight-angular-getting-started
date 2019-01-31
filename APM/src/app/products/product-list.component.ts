import { Component } from '@angular/core';

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle = 'Product List';
    products: Product[] = [
        { name: 'Product 1' },
        { name: 'Product 2' }
    ]
}

class Product {
    name: string = 'Product Name 123';
}