import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirstLetter',
})
export class StringUpperFirstLetterPipe implements PipeTransform {
  transform(string: string): string {
    return string[0].toUpperCase() + string.slice(1);
  }
}
