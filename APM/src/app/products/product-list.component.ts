import { Component } from '@angular/core';

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImages = false;
    filter = 'cart';
    products: Product[] = [
        {
            productId: 1,
            productName: 'Leaf Rake',
            productCode: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 3.2,
            imageUrl: 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        }
    ];

    toggleImages() {
        this.showImages = !this.showImages;
    }
}

class Product {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}
