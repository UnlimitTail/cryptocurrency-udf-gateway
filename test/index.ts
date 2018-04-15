import { expect } from 'chai';
import 'mocha';
import * as Lib from '../src/index';

describe('upbit', () => {

  it('history', () => {
    const api = Lib.default.chart.default.exchanges.factoryApi('upbit');

    api.history(new Lib.default.chart.default.exchanges.Interface.ChartHistoryParam({
        base: 'BTC',
        quote: 'KRW',
        resolution: Lib.default.chart.default.exchanges.Interface.ChartHistoryResolutions.Minute,
        resolutionValue: 30,
    }), (err: any, result: any): void => {
        // console.log('result', err, result);
        expect(err).to.equal(null);
    });
  });

});
