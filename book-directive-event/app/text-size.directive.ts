import {Directive, ElementRef, Renderer} from '@angular/core'
@Directive({
    selector:'[text-size]'
})
export class TextSizeDirective {
    constructor(private el:ElementRef, private renderer:Renderer){
        this.renderer.setElementAttribute(this.el.nativeElement, 'size', '10');
    }
}
