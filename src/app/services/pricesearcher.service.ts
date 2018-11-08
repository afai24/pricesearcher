import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PricesearcherService {

  constructor( private http: HttpClient ) {
    console.log('price searcher service ready');
   }

   getQuery( query: string ) {
    const url = `https://pricesearcher-frontend-test.herokuapp.com/products${query}`;
    const headers = new HttpHeaders({
     'X-API-KEY': '46c0a1e171c76bb37784d60aad4df750'
   });

   return this.http.get(url, { headers });

  }

   getProducts(term: string) {
    return this.getQuery(`?q=${term}&_limit=20`);
   }

   getProduct(id: string) {
    return this.getQuery(`?q=${id}`);
   }
}
