import {Router, RouterConfiguration} from 'aurelia-router';
import {useView, inject} from 'aurelia-framework';

@useView('app')
export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
            { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
            { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
            { route: 'index', name: 'index', moduleId: './form/index', nav: true, title: 'Index' }
            { route: 'login', name: 'login', moduleId: './account/login', nav: true, title: 'Login' }
        ]);

        this.router = router;
    }
}
