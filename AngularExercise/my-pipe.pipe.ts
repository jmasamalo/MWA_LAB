import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): boolean {
    console.log(args);
    return value.indexOf(args) >= 0;
  }

}
