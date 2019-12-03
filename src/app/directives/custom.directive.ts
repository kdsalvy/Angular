import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input('format') format: string
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log("On Focus");
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    console.log("On Blur");
    if(this.format == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else  
      this.el.nativeElement.value = value.toLowerCase();
  }
}
