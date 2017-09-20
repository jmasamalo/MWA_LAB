import { Directive,Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  
  constructor(private element: ElementRef, private renderer2: Renderer2) {
     console.log(element.nativeElement.attributes.appMyvisibility.nodeValue);
      if(element.nativeElement.attributes.appMyvisibility.specified){
        renderer2.setStyle(element.nativeElement, 'display', 'block');
      }else{
        renderer2.setStyle(element.nativeElement, 'display', 'none');
      }
    }

}
