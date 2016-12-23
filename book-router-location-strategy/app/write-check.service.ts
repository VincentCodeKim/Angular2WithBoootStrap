import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';
export interface WriteCheckDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class WriteCheck implements CanDeactivate<WriteCheckDeactivate> {
  canDeactivate(component: WriteCheckDeactivate) {
    console.log('canDeactive', component);
    if(component['reputation'] != ''){
      if(confirm('작성중입니다. 나가시겠습니까?') == true)
        return true;
      else 
        return false;
    }
    else {
      return true;
    }
  }
}