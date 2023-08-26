import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largeNumber',
})
export class LargeNumberPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (!value || isNaN(Number(value))) return value;

    let num = Number(value);

    num = Math.floor(num / Math.pow(10, value.length - 9));

    let result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return result;
  }
}
