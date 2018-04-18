import * as Exchanges from '../exchanges';

export default function(symbol: string, callback: (error: any, result: any) => void): any {
    // ex. BITFINEX:BTC-USD
    const [exchange, pair] = symbol.split(':');   // BITFINEX
    const [base, quote] = pair.split('-');  // BTC-USD

    // let pricescale = 1;
    // switch (quote.toUpperCase()) {
    //   case 'BTC':
    //   case 'XBT':
    //     pricescale = 100000000;
    //     break;
    //   case 'ETH':
    //     pricescale = 10000000;
    //     break;
    // }

    const result = {
        'description': symbol,
        'exchange-listed': exchange.toUpperCase(),
        'exchange-traded': exchange.toUpperCase(),
        'has_intraday': false,
        'has_no_volume': false,
        'minmov': 1,
        'minmov2': 0,
        'name': base.toUpperCase(),
        'pointvalue': 1,
        'pricescale': 100000000,
        'session': '0000-2400',
        'supported_resolutions': ['1M', '5M', '15M', '30M', '60M', 'D', '1W'],
        'ticker': symbol.toUpperCase(),
        'timezone': 'America/New_York',
        'type': 'stock',
      };

    callback(null, result);
}
