import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args: any){
    console.log(value,args);
    if(args === ''){
      return value;
    } else if(args === 'lowtohigh') {
      return value.sort((res1 : any,res2: any) => res1.price - res2.price);
    } else if(args === 'hightolow'){
      return value.sort((res1 : any,res2: any) => res2.price - res1.price);
    }
    return value;
  }

}
