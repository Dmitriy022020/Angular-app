import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private ref: ElementRef) {
  }

  ngOnInit() {
    this.ref.nativeElement.focus()
  }

  ngAfterViewInit() {
    // this.ref.nativeElement.focus()
  }

}
