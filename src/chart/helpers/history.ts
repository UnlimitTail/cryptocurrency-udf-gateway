import HistoryParam from './HistoryParam';

import * as Exchanges from '../exchanges';

export default function(param: HistoryParam, callback: (error: any, result: any) => void): any {
    // ex. BITFINEX:BTC-USD
    const [exchange, pair] = param.symbol.split(':');   // BITFINEX
    const [base, quote] = pair.split('-');  // BTC-USD

    // ex. 30M
    const rsValue = String(param.resolution.match(/\d+/g)); // 30
    const rs = String(param.resolution.match(/[a-zA-Z]+/g));    // M

    const historyParam = new Exchanges.Interface.ChartHistoryParam({
        base,
        quote,
        resolution: rs,
        resolutionValue: parseInt(rsValue, 10),
    });

    const api = Exchanges.factoryApi(exchange);
    api.history(historyParam, callback);
}