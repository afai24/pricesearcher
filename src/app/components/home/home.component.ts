import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { PricesearcherService } from 'src/app/services/pricesearcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: any[] = [];
  loading: boolean;
  constructor( private pricesearcher: PricesearcherService ) { }

  search(term: string) {
    this.loading = true;
    this.pricesearcher.getProducts(term)
      .subscribe((data: any) => {
        this.products = data;
        this.loading = false;
        console.log(data);
      });
  }
}
