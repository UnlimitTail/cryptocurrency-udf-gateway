import { expect } from 'chai';
import 'mocha';
import * as Lib from '../../src';

const EXCHANGE = 'bithumb';

describe('privateApi', () => {
  describe(EXCHANGE, () => {

    const {
      APIKEY_BITHUMB,
      APISECRET_BITHUMB,
    } = process.env;

    const api = Lib.Private.Exchanges.factoryApi(EXCHANGE, {
      key: APIKEY_BITHUMB,
      secret: APISECRET_BITHUMB,
    });

    it('initlize', (done) => {
      api.initializeAsync()
      .then((res: boolean) => {
        expect(res).to.equal(true);
        done();
      })
      .catch((err: any) => {
        console.log(err);
        done(err);
      });
    }).timeout(1000 * 10);

    it('getBalance', (done) => {
      api.getBalancesAsync()
      .then((balances: Lib.Private.Exchanges.Interface.IBalances) => {
        expect(balances.balances.length).to.greaterThan(0);
        done();
      })
      .catch((err: any) => {
        console.log(err);
        done(err);
      });
    }).timeout(1000 * 10);

  });
});
