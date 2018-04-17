import { expect } from 'chai';
import 'mocha';
import * as Lib from '../../src';

describe('chart', () => {

  describe('history', () => {

    it('manual', () => {
      const api = Lib.Chart.Exchanges.factoryApi('upbit');

      api.history(new Lib.Chart.Exchanges.Interface.ChartHistoryParam({
          base: 'BTC',
          from: Math.floor(new Date().getTime() / 1000) - 60 * 60 * 24,
          quote: 'KRW',
          resolution: Lib.Chart.Exchanges.Interface.ChartHistoryResolutions.Minute,
          resolutionValue: 30,
          to: Math.floor(new Date().getTime() / 1000),
      }), (err: any, result: Lib.Chart.Exchanges.Interface.History): void => {
          // console.log('result', err, result);
          expect(err).to.equal(null);
          expect(result.c.length).greaterThan(0);
      });
    });

    it('helper', () => {
      const param = new Lib.Chart.Helpers.HistoryParam({
        from: Math.floor(new Date().getTime() / 1000) - 60 * 60 * 24,
        resolution: '30M',
        symbol: 'UPBIT:BTC-KRW',
        to: Math.floor(new Date().getTime() / 1000),
      });

      Lib.Chart.Helpers.history(param, (err: any, result: Lib.Chart.Exchanges.Interface.History): void => {
        // console.log('result', err, result);
        expect(err).to.equal(null);
        expect(result.c.length).greaterThan(0);
      });

    });

  });

});
