import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallDigits',
})
export class SmallDigits implements PipeTransform {
  transform(value: string): string {
    const base = 10 ** 18;
    let etherValue = parseFloat(value) / base;


    return etherValue.toFixed(2);
  }
}
