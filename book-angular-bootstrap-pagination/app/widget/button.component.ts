import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'exbutton',
    templateUrl: './app/widget/button.component.html',
})
export class ButtonComponent { 
    @Input() text ="Button"
    @Input() iconClass =""
    @Input() btnClass ="btn btn-default btn-lg"
    @Output() click= new EventEmitter<string>();
    setText(text){
        this.text = text;
    }
    getText(){
        return this.text;
    }
    onClick($event){
        return($event);
    }    
}
