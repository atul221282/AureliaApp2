export class Quarter {
    private coin: number = .25;
    get value() {
        return this.coin;
    }
    getImageUrl = (): string => {
        return "";
    }
    static goFishing = (): string => {
        return "atul";
    }
}