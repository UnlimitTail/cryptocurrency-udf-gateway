export enum ChartHistoryResolutions {
  None = '_',
  Day = 'D',
  Minute = '',
}

export default class ChartHistoryParam {
  public base: string = '';
  public quote: string = '';
  public resolution: ChartHistoryResolutions = ChartHistoryResolutions.None;
  public resolutionValue: number = 0;
  public from: number = 0;
  public to: number = 0;

  constructor(param: any) {
    this.base = param.base;
    this.quote = param.quote;
    this.resolution = param.resolution;
    this.resolutionValue = param.resolutionValue;
    this.from = param.from;
    this.to = param.to;
  }
}
