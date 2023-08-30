import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString',
})
export class TruncateStringPipe implements PipeTransform {
  transform(value: string, limit = 50): string {
    if (!value) {
      return '';
    }

    if (value.length <= limit) {
      return value;
    }

    return value.substring(0, limit) + '...';
  }
}
