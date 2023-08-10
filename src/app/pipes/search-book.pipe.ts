import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform(value: any[], ...args: any) {
    if(!args){
      return value;
    }else{
      return value?.filter((data:any)=>{
        return data.bookName.toLowerCase().includes(args) || data.author.toLowerCase().includes(args) || data.price.toString().includes(args)
      })
    }
  }

}
