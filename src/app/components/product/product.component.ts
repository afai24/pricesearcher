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

  constructor( private router: ActivatedRoute,
    private pricesearcher: PricesearcherService ) {
      this.router.params.subscribe(params => {
        console.log(params['id']);
        this.getProduct(params['id']);
      });
     }


  getProduct(id: string) {
    this.pricesearcher.getProduct(id)
    .subscribe( product => {
      console.log(product[0]);
      this.item = product[0];
      this.loadingProduct = false;
    } );
  }

}
