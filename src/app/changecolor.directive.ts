import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[changeColor]',
})
export class ColorDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter')
  onChangeColor() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseout')
  onChangeColorBack() {
    setTimeout(() => {
      this.el.nativeElement.style.backgroundColor = 'red';
    }, 1000);
  }
}
