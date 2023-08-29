import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: number): string {
    const now = Date.now();
    const targetDate = new Date(value * 1000);
    const diffInSeconds = (now - targetDate.getTime()) / 1000;

    if (diffInSeconds < 60) {
      return `${diffInSeconds.toFixed(0)} secs`;
    }
    const diffInMinutes = diffInSeconds / 60;
    if (diffInMinutes < 60) {
      return `${diffInMinutes.toFixed(0)} mins`;
    }
    const diffInHours = diffInMinutes / 60;
    if (diffInHours < 24) {
      return `${diffInHours.toFixed(0)} hrs`;
    }
    const diffInDays = diffInHours / 24;
    if (diffInDays < 365) {
      return `${diffInDays.toFixed(0)} days`;
    }

       return `${diffInDays.toFixed(0)} days`;
  }
}
