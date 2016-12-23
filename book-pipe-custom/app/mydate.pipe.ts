import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mydate'})
export class MyDatePipe implements PipeTransform {
    transform(value: string, exponent: string): string {
        if(value.length ==10){
            return value;
        }
        if(value.length == 8){
            return value.substring(0,4) + exponent + 
                value.substring(4,6) +  exponent + 
                value.substring(6,8);
        }
        else {
            return value;
        }
    }
}
