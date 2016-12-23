import {Directive, ElementRef, Renderer, Input} from '@angular/core'
@Directive({
    selector:'[text-color]',
    host:{
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})
export class TextColorDirective {
    @Input('text-color') color;
    constructor(private el:ElementRef, private renderer:Renderer){
    }
    onFocus(){
        this.renderer.setElementStyle(
            this.el.nativeElement, 
            'background', 
            this.color);
    }
    onBlur(){
        this.renderer.setElementStyle(
            this.el.nativeElement, 
            'background', 
            'white');
        console.log(this.el);
    }
}
