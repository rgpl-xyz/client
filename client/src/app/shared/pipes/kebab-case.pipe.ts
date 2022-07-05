import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabcase'
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): unknown {
    let kebabizeString = value.trim();

    if (kebabizeString.indexOf(' ') !== -1) {
      kebabizeString = kebabizeString
        .split(' ')
        .filter((d) => d !== '')
        .map((w) => {
          return new TitleCasePipe().transform(w);
        })
        .join('');
    }

    kebabizeString = kebabizeString
      .split('')
      .map((letter, idx) => {
        return letter.toUpperCase() === letter
          ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
          : letter;
      })
      .join('');

    return kebabizeString;
  }
}
