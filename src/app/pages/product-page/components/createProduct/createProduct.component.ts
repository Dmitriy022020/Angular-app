import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductStore} from "../../productStore";
import {ModalStore} from "../../../../commonComponents/modal/modalStore";

@Component({
  selector: 'app-createProduct',
  templateUrl: './createProduct.component.html',
  styleUrls: ['./createProduct.component.scss']
})
export class CreateProductComponent {
  form = new FormGroup({
    title: new FormControl<string>(
      '',
      [Validators.required, Validators.minLength(6)]
    )
  })

  constructor(
    private productStore: ProductStore,
    private modalStore: ModalStore
  ) {
  }

  get title() {
    return this.form.controls.title as FormControl
  }

  submit() {
    console.log(this.form.value)
    this.productStore.createItem({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    })
      .subscribe(() => {
        this.modalStore.close()
      })
  }
}

