import {inject, NewInstance} from 'aurelia-dependency-injection';
import {ValidationController} from 'aurelia-validation';
import {required, email, ValidationRules} from 'aurelia-validatejs';
import {bindable} from 'aurelia-framework';

export class NestedElement {
    @bindable childmodel: string;
    @bindable childname: string;
    model: custom;
    validation: any;
    static inject = [NewInstance.of(ValidationController), ValidationRules];
    constructor(public controller: ValidationController,
        public validatoinRules: ValidationRules) {
        this.model = new custom();
    }

    attached() {
        this.model.child = this.childmodel;
        this.model.name = this.childname;

        this.validatoinRules
            .ensure("childmodel").required()
            .ensure("childname").required()
            .on(this);

    }

    submit() {
        let errors = this.controller.validate();
    }
}

export class custom {
    public child: string;
    public name: string;
}