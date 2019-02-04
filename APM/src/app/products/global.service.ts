import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalService {
    private theNumber = 1;

    getNumber() {
        return this.theNumber++;
    }
}
