import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PricesearcherService } from 'src/app/services/pricesearcher.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  item: any = {}; // empty object
  topProduct: any[] = [];
  loadingProduct: boolean;
  priceDrop: boolean;
  dateDrop: string;

  constructor( private router: ActivatedRoute,
    private pricesearcher: PricesearcherService ) {
      this.router.params.subscribe(params => {
        console.log(params['id']);
        this.getProduct(params['id']);
      });
     }


  getProduct(id: string) {
    this.pricesearcher.getProduct(id)
    .subscribe( (product: any) => {
      console.log(product);
      console.log(product[0]);
      console.log(product[0].price_history);
      const price = Object.values(product[0].price_history);
      const dates = Object.keys(product[0].price_history);
      console.log(price);
      if (price.length > 1) {
        const num1 = Number(price[price.length - 1]);
        const num2 = Number(price[price.length - 2]);
        const result = num1 - num2;
        if (result < 0 ) {
          this.priceDrop = true;
          this.dateDrop = dates[dates.length - 1];
        }
      }
      this.item = product[0];
      this.loadingProduct = false;
    } );
  }


}
