import {inject, NewInstance} from 'aurelia-dependency-injection';
import {ValidationController} from 'aurelia-validation';
import {required, email, ValidationRules} from 'aurelia-validatejs';
import {bindable} from 'aurelia-framework';

export class NestedElement {
    @bindable childmodel: string;
    @bindable childname: string;
    static inject = [NewInstance.of(ValidationController), ValidationRules];
    constructor(public controller: ValidationController,
        public validatoinRules: ValidationRules) {
    }

    attached() {
        this.validatoinRules
            .ensure("childmodel").required()
            .ensure("childname").required()
            .on(this);

    }

    get canSubmit() {
        return this.controller.validate().length <= 0;
    }

    submit() {
        let errors = this.controller.validate();

    }
}
