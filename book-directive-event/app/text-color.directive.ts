import {Directive, ElementRef, Renderer, HostListener} from '@angular/core'
@Directive({
    selector:'[text-color]',
})
export class TextColorDirective {
    constructor(private el:ElementRef, private renderer:Renderer){
    }
    @HostListener('focus')  onFocus(){
        this.renderer.setElementStyle(
            this.el.nativeElement, 
            'background', 
            'yellow');
    }
    @HostListener('blur') onBlur(){
        this.renderer.setElementStyle(
            this.el.nativeElement, 
            'background', 
            'white');
        console.log(this.el);
    }
}
