import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateMiddle',
})
export class TruncateMiddlePipe implements PipeTransform {
  transform(value: string, maxLength: number = 30): string {
    if (value?.length <= maxLength) {
      return value;
    }

    const frontChars = Math.ceil(maxLength / 2);
    const backChars = Math.floor(maxLength / 2);

    return (
      value.substr(0, frontChars) +
      '...' +
      value.substr(value.length - backChars)
    );
  }
}
