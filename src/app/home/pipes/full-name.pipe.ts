import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(firstName: string, lastName: string, surName: string): string {
    const name = `${firstName} ${lastName}`;
    if (surName.length && name.length) {
      return `${name} . ${surName}`;
    } else if (surName.length && !name.length) {
      return `${surName}`;
    } else {
      return name;
    }
  }
}
