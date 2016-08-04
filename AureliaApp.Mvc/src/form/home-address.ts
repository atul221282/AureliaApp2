import * as interfaces from '../interfaces';

export class HomeAddress implements interfaces.IBaseEntity {
    public view: string = "form/home-address";
    public model: string;
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