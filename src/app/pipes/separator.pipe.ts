import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator',
  standalone: true,
})
export class SeparatorPipe implements PipeTransform {
  transform(value: string, separator: string = '-'): string {
    if (!value) {
      return value;
    }
    return value.split('').join(separator);
  }
}
