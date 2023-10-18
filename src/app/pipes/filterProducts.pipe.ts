import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from "../models/IProduct";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(items: IProduct[], searchValue: string): IProduct[] {
    if (!searchValue) {
      return items
    }
    return items.filter(({title}) => title.toString().includes(searchValue.toLowerCase()));
  }

}
