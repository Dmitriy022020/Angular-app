import {Component, Input} from '@angular/core';


import {ITodo} from "../../../../models/ITodo";
import {CartStore} from "../../cartStore";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() todo!: ITodo
  @Input() index: number = 0

  // @Output() onToggle = new EventEmitter<number>()

  constructor(public cartStore: CartStore) {
  }

  handleOnChange = (id: number) => {
    this.cartStore.onToggle(id)
    // this.onToggle.emit(id)
  }

  removeItem = (id: number) => {
    this.cartStore.removeItem(id)
  }
}
