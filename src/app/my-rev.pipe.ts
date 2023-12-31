import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    let reversedString: string = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reversedString += value[i];
    }
    return reversedString;
  }

}
