import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
    selector: 'pm-star-component',
    styleUrls: ['./star.component.css'],
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {

    constructor(private productService: ProductService) {
        console.log('creating StarComponent' + productService.getId().toString());
    }

    private readonly maxStarRating = 5;
    private readonly maxStarWidth = 75;

    @Input() rating = this.maxStarRating;
    @Output() notify = new EventEmitter<number>();

    starWidth = this.maxStarWidth;

    id = this.productService.getId();

    ngOnChanges() {
        this.adjustWidth();
    }

    onClick() {
        this.notify.emit(this.rating);
    }

    private adjustWidth() {
        this.starWidth = this.rating * this.maxStarWidth / this.maxStarRating;
    }
}
