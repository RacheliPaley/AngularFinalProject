import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: number): string {
   let stars=""
   let i=0;
   while(i<value){stars+="*"; i++}
    return stars;
  }

}
