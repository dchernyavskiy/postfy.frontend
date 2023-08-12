import {Pipe, PipeTransform} from '@angular/core';
import {format, formatDistanceToNow, parseISO} from 'date-fns';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: string | Date): string {
    const str: string = ''
    if (typeof value == typeof str) {
      const date = parseISO(value as string)
      return formatDistanceToNow(date, {addSuffix: true});
    }
    return formatDistanceToNow(value as Date, {addSuffix: true});
  }
}
