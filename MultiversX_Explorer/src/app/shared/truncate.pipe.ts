import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number = 6): string {
    if (!value || value.length <= length) {
      return this.formatNumber(value);
    }
    return this.formatNumber(value.substr(0, length));
  }

  private formatNumber(num: string): string {
    return Number(num).toLocaleString('en-US');
  }
}
