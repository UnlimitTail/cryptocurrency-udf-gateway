import { get } from '../../../util';
import { ChartConfig, ChartHistoryParam, ChartHistoryResolutions, ChartUdfDef } from '../_interface';

interface ICandle {
  openingPrice: number;
  highPrice: number;
  lowPrice: number;
  tradePrice: number;
  timestamp: number;
  candleAccTradeVolume: number;
}

export class Api extends ChartUdfDef {
  public config(): ChartConfig {
    return new ChartConfig();
  }

  public history(
    param: ChartHistoryParam,
    callback: (error: any, result: any) => void,
  ): void {
    const resolutionV = param.resolutionValue;
    const base = param.base.toUpperCase();
    const quote = param.quote.toUpperCase();
    const rnd = new Date().getTime();

    let url: string;
    if (param.resolution === ChartHistoryResolutions.Day) {
      url = `https://crix-api-endpoint.upbit.com/v1/crix/candles/days?code=CRIX.UPBIT.${quote}-${base}&count=200&ciqrandom=${rnd}`;
    } else if (param.resolution === ChartHistoryResolutions.Minute) {
      url = `https://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/${resolutionV}?code=CRIX.UPBIT.${quote}-${base}&count=200&ciqrandom=${rnd}`;
    } else {
      return callback(new Error('invalid resolution'), null);
    }

    get(url)
    .then((res: Response): any => res.json())
    .then((hitories: ICandle[]): object[] => {
      return hitories.map((h: ICandle) => {
        return {
          c: h.tradePrice,
          h: h.highPrice,
          l: h.lowPrice,
          o: h.openingPrice,
          t: h.timestamp,
          v: h.candleAccTradeVolume,
        };
      });
    })
    .then((res: any) => callback(null, res))
    .catch((err: any) => callback(err, null))
    ;
  }
}
