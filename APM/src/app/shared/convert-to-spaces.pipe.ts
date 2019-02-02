import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertToSpaces' })
export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, characterString: string) {
        return value.toUpperCase();
    }
}
