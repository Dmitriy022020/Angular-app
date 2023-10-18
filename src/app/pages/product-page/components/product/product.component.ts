import {Component, Input} from '@angular/core';
import {IProduct} from "../../../../models/IProduct";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: IProduct

  details: boolean = false

  handleClick = () => {
    this.details = !this.details
  }
}
