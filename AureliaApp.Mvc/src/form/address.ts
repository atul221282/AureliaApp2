import * as interfaces from '../interfaces';
import {useView, bindable} from 'aurelia-framework';

export class Address implements interfaces.IBaseEntity {

    public view: string = "form/address";
    @bindable model: string;
    constructor() {
        console.log("address constructed - " + this.model);
    }
    init = (): void => {
        this.model = "Address";
    }

    activate(bindingContext) {
        this.model = bindingContext;
        console.log("address ativated - " + this.model);
    }
}