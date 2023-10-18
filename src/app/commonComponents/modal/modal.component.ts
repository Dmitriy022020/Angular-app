import {Component, Input} from '@angular/core';
import {ModalStore} from "./modalStore";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title!: string

  constructor(public modalStore: ModalStore) {
  }
}
