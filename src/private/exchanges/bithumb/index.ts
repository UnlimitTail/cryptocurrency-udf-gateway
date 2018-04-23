import assert from 'assert';
import _ from 'lodash';
import { IBalance, IBalances, IPrivateApi, IPrivateApiInitParam, ITradeHistories } from '../_interface';

import ccxt from 'ccxt';

export class Api implements IPrivateApi {
    private api: ccxt.bithumb = new ccxt.bithumb();

    public initializeAsync(param: IPrivateApiInitParam): Promise<boolean> {
        assert(param.key);
        assert(param.secret);

        this.api = new ccxt.bithumb({
            apiKey: param.key,
            secret: param.secret,
        });

        return new Promise((resolve, reject) => resolve(true));
    }

    public getBalancesAsync(): Promise<IBalances> {
        return this.api.fetchBalance()
        .then((response: any): IBalances => {
            const info: any = response.info;
            if (!info.status || info.status !== '0000') {
                throw new Error(`invalid status : ${info.status}`);
            }

            if (!response.total) {
                throw new Error('invalid total property');
            }

            const balances = new Array<any>();
            _.forOwn(response.total, (amount: number, symbol: string) => {
                balances.push({
                    amount,
                    symbol,
                });
            });

            return {
                balances,
            };
        })
        ;
    }

    public getTradeHistoiesAsync(): Promise<ITradeHistories> {
        return new Promise<ITradeHistories>(() => ({}));
    }
}
