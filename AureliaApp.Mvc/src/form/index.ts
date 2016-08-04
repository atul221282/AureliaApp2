import {autoinject} from 'aurelia-framework';
import * as interfaces from '../interfaces';
import {Address} from '../form/address';
import {HomeAddress} from '../form/home-address';


export class Index {

    public _items: interfaces.IBaseEntity[];
    
    constructor() {
        this._items = new Array<interfaces.IBaseEntity>();
        this._items.push(new Address());
        this._items.push(new HomeAddress());
    }

    activate() {
        this._items.forEach((entity, index, arr) => {
            entity.init();
        });
    }
}
