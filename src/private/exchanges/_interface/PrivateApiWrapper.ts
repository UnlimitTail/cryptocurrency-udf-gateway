import { BalancesNone, IBalances } from './IBalance';
import IPrivateApi from './IPrivateApi';
import IPrivateApiInitParam from './IPrivateApiInitParam';
import { ITradeHistories, TradeHistoriesNone } from './ITradeHistory';

export default class PrivateApiWrapper {
    constructor(private readonly mod: IPrivateApi, protected readonly config: IPrivateApiInitParam) {}

    public initialize(callback: (error: any) => void): void {
        this.initializeAsync()
        .then((result: boolean) => {
            if (!result) {
                throw new Error('failed to initializeAsync');
            }

            callback(null);
        })
        .catch((error: any) => {
            callback(error);
        });
    }
    public initializeAsync(): Promise<boolean> {
        return this.mod.initializeAsync(this.config);
    }

    public getBalances(callback: (error: any, result: IBalances) => void): void {
        this.getBalancesAsync()
        .then((result: IBalances) => {
            callback(null, result);
        })
        .catch((error: any) => {
            callback(error, new BalancesNone());
        });
    }
    public getBalancesAsync(): Promise<IBalances> {
        return this.mod.getBalancesAsync();
    }
}
