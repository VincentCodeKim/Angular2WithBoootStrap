import {Component, OnInit, Output, EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class CommonService {
    public myEvent: EventEmitter<any>;
    constructor() {
        this.myEvent = new EventEmitter();
    }
    callMyEvent(data){
        console.log('....1')
        this.myEvent.emit(data);
    }
} 
