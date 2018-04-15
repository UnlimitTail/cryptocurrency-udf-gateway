import { expect } from 'chai';
import 'mocha';
import * as Lib from '../src';

describe('history', () => {

  it('manual', () => {
    const api = Lib.Chart.Exchanges.factoryApi('upbit');

    api.history(new Lib.Chart.Exchanges.Interface.ChartHistoryParam({
        base: 'BTC',
        quote: 'KRW',
        resolution: Lib.Chart.Exchanges.Interface.ChartHistoryResolutions.Minute,
        resolutionValue: 30,
    }), (err: any, result: any): void => {
        // console.log('result', err, result);
        expect(err).to.equal(null);
    });
  });

  it('helper', () => {
    const param = new Lib.Chart.Helpers.HistoryParam({
      resolution: '30M',
      symbol: 'UPBIT:BTC-KRW',
    });

    Lib.Chart.Helpers.history(param, (err: any, result: any): void => {
      // console.log('result', err, result);
      expect(err).to.equal(null);
    });

  });

});
