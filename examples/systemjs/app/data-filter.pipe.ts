import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {
  keys = [];
  transform(items: any, args: string): any {
  if(args==undefined){
   return items
  }else{
    if (items != null && items.length > 0) {
      let ans = [];
    
      if (this.keys.length == 0) {
        this.keys = Object.keys(items[0]);
      }
    
      for (let i of items) {
        for (let k of this.keys) {
          if (i[k].toString().toLowerCase().match('^.*' + args.toLowerCase() +'.*$')) {
            ans.push(i);
            break;
          }
        }
      }
      return ans;
    }
  }
}
}
