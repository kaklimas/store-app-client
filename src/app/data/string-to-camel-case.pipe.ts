import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCamelCase',
})
export class StringToCamelCasePipe implements PipeTransform {
  transform(string: string): string {
    return string[0].toLowerCase() + string.slice(1).split(' ').join('');
  }
}
