import { Directive, HostListener, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appCustomDirective]",
})
export class CustomDirectiveDirective {
  @Input("appCustomDirective") format;
  // defines the input field and binds it to the element by
  // setting the alias to the directive's selector value

  constructor(private el: ElementRef) {}
  @HostListener("focus") onFocus() {
    console.log("on Focus");
  }
  // the blur event is triggered when an element loses focus.
  @HostListener("blur") onBlur() {
    let value: string = this.el.nativeElement.value;
    this.format === "lowercase"
      ? (this.el.nativeElement.value = value.toLowerCase())
      : (this.el.nativeElement.value = value.toUpperCase());
    console.log("on Blur");
  }
}
