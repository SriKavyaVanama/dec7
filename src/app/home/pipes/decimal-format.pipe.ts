import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFormat'
})
export class DecimalFormatPipe implements PipeTransform {

  transform(value: number | string, decimalNumber: number): string {
    const numericValue = Number(value);
    if (!isNaN(numericValue)) {
      return numericValue.toFixed(decimalNumber);
    } else {
      return value.toString();
    }
  }

}
