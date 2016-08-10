import {User} from "../model/user";
import {inject, NewInstance} from 'aurelia-dependency-injection';
import {ValidationController} from 'aurelia-validation';
import {required, email, ValidationRules} from 'aurelia-validatejs';

export class Login {
    public user: User;
    static inject = [NewInstance.of(ValidationController), ValidationRules];
    constructor(public controller: ValidationController,
        public validatoinRules: ValidationRules) {
        this.user = new User();
        this.user.name = "Atul2212";
        this.user.password = "123456";
    }

    attached() {
        this.validatoinRules
            .ensure("name").required()
            .ensure("password").required()
            .on(this.user);

    }
}