import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartStore} from "./cartStore";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  constructor(public cartStore: CartStore) {
  }

  ngOnInit() {
    this.cartStore.getItems().subscribe()
  }

  ngOnDestroy() {
    this.cartStore.clearStore()
  }
}
