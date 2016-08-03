import {Quarter} from '../post/quarter';

export class VendingMachine {

    private acceptedCoins: Quarter[] = [new Quarter()];
    constructor(private paid: number) {
        this.paid = 0;
    }

    
    
}

enum Size {
    medium = 1,
    small = -1,
    large = 2
}