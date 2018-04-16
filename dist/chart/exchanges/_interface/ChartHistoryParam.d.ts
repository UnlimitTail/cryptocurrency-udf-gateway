export declare enum ChartHistoryResolutions {
    None = "_",
    Day = "D",
    Minute = "M",
}
export default class ChartHistoryParam {
    base: string;
    quote: string;
    resolution: ChartHistoryResolutions;
    resolutionValue: number;
    constructor(param: any);
}
