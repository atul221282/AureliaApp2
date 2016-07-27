import {useView, bindable} from 'aurelia-framework';

@useView('nav-bar')
export class NavBar {
    @bindable router;
}