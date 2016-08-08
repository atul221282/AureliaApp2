import {bindable} from 'aurelia-framework';

export class NestedElement {
    @bindable childmodel: string;
    @bindable childname: string;
    constructor() {

    }
}