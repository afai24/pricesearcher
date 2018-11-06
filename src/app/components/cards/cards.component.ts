import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() items: any[] = [];
  constructor( private router: Router ) { }

  viewProduct(item: any) {
    console.log(item);
    let productId;
    productId = item;
    this.router.navigate([ '/product', item ]);
  }


}
