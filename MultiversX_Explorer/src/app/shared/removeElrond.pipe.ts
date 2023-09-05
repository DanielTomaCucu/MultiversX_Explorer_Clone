import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeElrond',
})
export class RemoveElrondPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace('.elrond', '');
  }
}
