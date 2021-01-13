import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, filteredProperty: string): any {
    if(value.length === 0 || filterString === '') {
      return value;
    }
    const resultsArray: string[] = [];
    for(const item of value) {
      if(item[filteredProperty] === filterString) {
        resultsArray.push(item);
      }
    }
    return resultsArray;
  }

}
