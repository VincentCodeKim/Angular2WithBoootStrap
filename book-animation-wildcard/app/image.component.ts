import {Component, Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
    selector: 'my-image',
    templateUrl: './app/image.component.html',
    animations:[
        trigger('state',[
            state('inactive', style({
                backgroundColor:'#eee',
                transform:'scale(1)'
            })),
            state('active', style({
                backgroundColor:'#cfd8dc',
                transform:'scale(1.3)'
            })),
            state('selected', style({
               transform: 'translateY(100%)'
            })),
            transition('*=>selected', animate('100ms ease-in')),
            transition('*=>active', animate('100ms ease-in')),
            transition('*=>inactive', animate('100ms ease-out'))
        ])
    ]
})
export class ImageComponent { 
    @Input() src = "";
    state='inactive';
    onClick(){
        this.state = 'selected'
    }
    onMouseOver(){
        this.state = 'active';
    }
    onMouseOut(){
        this.state = 'inactive';
    }
}
