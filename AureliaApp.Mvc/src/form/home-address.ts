import * as interfaces from '../interfaces';
import {useView, bindable} from 'aurelia-framework';

export class HomeAddress implements interfaces.IBaseEntity {
    public view: string = "form/home-address";
    @bindable model: string;
    
    constructor() {
        console.log("address constructed - " + this.model);
    }

    init = (): void => {
        this.model = "Home Address";
    }

    activate(bindingContext) {
        this.model = bindingContext;
        console.log("address ativated - " + this.model);
    }
}