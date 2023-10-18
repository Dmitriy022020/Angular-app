import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductStore} from "./productStore";
import {ModalStore} from "../../commonComponents/modal/modalStore";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  // title: string = 'Angular-APP';
  // products$!: Observable<IProduct[]>
  term: string = ''

  constructor(
    public productStore: ProductStore,
    public modalStore: ModalStore
  ) {
  }

  ngOnInit() {
    this.productStore.getItems().subscribe()
    // this.products$ = this.productService.getItems()
    //   .pipe(finalize(() => {
    //     this.loading = false
    //   }))
  }

  ngOnDestroy() {
    this.productStore.clearStore()
  }
}
