export default class HistoryParam {
    public symbol: string = '';
    public resolution: string = '';

    constructor(param: any) {
        this.symbol = param.symbol;
        this.resolution = param.resolution;
    }
}
