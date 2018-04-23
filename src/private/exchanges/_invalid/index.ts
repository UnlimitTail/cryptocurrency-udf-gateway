import assert from 'assert';
import _ from 'lodash';
import { IBalance, IBalances, IPrivateApi, IPrivateApiInitParam, ITradeHistories } from '../_interface';

import ccxt from 'ccxt';

export class Api implements IPrivateApi {
    private api: ccxt.bithumb = new ccxt.bithumb();

    public initializeAsync(param: IPrivateApiInitParam): Promise<boolean> {
        assert('it should not called here');
        return new Promise(() => false);
    }

    public getBalancesAsync(): Promise<IBalances> {
        assert('it should not called here');
        return new Promise<IBalances>((resolve, reject) => {
          reject('it should not called here');
        });
    }

    public getTradeHistoiesAsync(): Promise<ITradeHistories> {
        assert('it should not called here');
        return new Promise<ITradeHistories>((resolve, reject) => {
          reject('it should not called here');
        });
    }
}
