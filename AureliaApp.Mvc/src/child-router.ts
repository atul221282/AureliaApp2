import {Router, RouterConfiguration} from 'aurelia-router';
import {useView} from 'aurelia-framework';

@useView('child-router')
export class ChildRouter {
    heading = 'Child Router';
    router: Router;
    baseArray: Base[] = [new Even(4), new Even(8), new Odd(), new Prime()];


    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
            { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
            { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
        ]);

        this.router = router;

    }
    constructor() {
        this.baseArray.forEach((b, i, ar) => {
            b.getValue();
        });

        let collection = new Colection<string>();
        collection.Add("at");
        alert(JSON.stringify(collection.Get(0)));
    }
}


interface Base {
    value: number
    getValue()
}
interface BaseCollection<T> {
    Add(item: T);
    Get(index: number): T;
}
export class Even implements Base {
    value: number = 2;
    constructor(private fromVar: number) {
        this.value = this.value + fromVar;
    }
    getValue = (): void => {
        alert(this.value);
    }
}
export class Odd implements Base {
    value: number = 3;
    getValue = (): void => {
        alert(this.value);
    }
}
export class Prime implements Base {
    value: number = 13;
    getValue = (): void => {
        alert(this.value);
    }
}

export class Colection<T> implements BaseCollection<T> {

    ptvitems: T[];
    Add = (item: T): void => {
        this.ptvitems.push(item);
    }
    Get = (index: number): T => {
        return this.ptvitems[index];
    }
}
