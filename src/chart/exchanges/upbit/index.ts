import { ErrorPromise, getAsync } from '../../../util';
import {
  ChartHistoryParam,
  ChartHistoryResolutions,
  ChartUdfDef,
  ExchangeCfg,
  History,
  IHistory,
} from '../_interface';

interface IUpbitCandle {
  openingPrice: number;
  highPrice: number;
  lowPrice: number;
  tradePrice: number;
  timestamp: number;
  candleAccTradeVolume: number;
}

export class Api extends ChartUdfDef {
  public config(): ExchangeCfg {
    return new ExchangeCfg({
      desc: 'UPBIT',
      name: 'UPBIT',
      value: 'UPBIT',
    });
  }

  public historyAsync(param: ChartHistoryParam): Promise<IHistory> {
    const {
      from,
      resolutionValue,
      to,
    } = param;
    const base = param.base.toUpperCase();
    const quote = param.quote.toUpperCase();
    const rnd = new Date().getTime();

    let interval: number;
    let url: string;
    if (param.resolution === ChartHistoryResolutions.Day) {
      interval = 60 * 60 * 24;
      url = `https://crix-api-endpoint.upbit.com/v1/crix/candles/days?code=CRIX.UPBIT.${quote}-${base}&count=200&ciqrandom=${rnd}`;
    } else if (param.resolution === ChartHistoryResolutions.Minute) {
      interval = 60 * resolutionValue;
      url = `https://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/${resolutionValue}?code=CRIX.UPBIT.${quote}-${base}&count=200&ciqrandom=${rnd}`;
    } else {
      return new ErrorPromise<IHistory>('invalid resolution');
    }

    return getAsync(url)
    .then((res: Response): any => res.json())
    .then((hitories: IUpbitCandle[]): IHistory => {
      const history = new History(interval, from, to);
      hitories.reverse().map((h: IUpbitCandle) => {
        const t = Math.floor(h.timestamp / 1000);
        history.push({
          c: h.tradePrice,
          h: h.highPrice,
          l: h.lowPrice,
          o: h.openingPrice,
          t,
          v: h.candleAccTradeVolume,
        });

      });
      return history;
    });
  }
}
