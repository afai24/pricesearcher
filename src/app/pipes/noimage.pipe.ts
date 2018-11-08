import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  // let image_url;
  transform(item: any[]): string {

    if (!item) {
      return 'assets/img/noimage.png';
    }
    if (item.length > 0 ) {
     return item['image_url'];
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
