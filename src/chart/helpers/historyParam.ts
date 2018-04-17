export default class HistoryParam {
    public symbol: string = '';
    public resolution: string = '';
    public from: number = 0;
    public to: number = 0;

    constructor(param: any) {
        this.symbol = param.symbol;
        this.resolution = param.resolution;
        this.from = param.from;
        this.to = param.to;
    }
}
