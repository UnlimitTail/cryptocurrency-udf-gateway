import { BalancesNone, IBalances } from './IBalance';
import IPrivateApiInitParam from './IPrivateApiInitParam';
import { ITradeHistories, TradeHistoriesNone } from './ITradeHistory';

export default abstract class PrivateApiDef {
    public initialize(param: IPrivateApiInitParam, callback: (error: any) => void): void {
        this.initializeAsync(param)
        .then((result: History) => {
            callback(null);
        })
        .catch((error: any) => {
            callback(error);
        });
    }
    public abstract initializeAsync(param: IPrivateApiInitParam): Promise<any>;

    public getBalances(callback: (error: any, result: IBalances) => void): void {
        this.getBalancesAsync()
        .then((result: IBalances) => {
            callback(null, result);
        })
        .catch((error: any) => {
            callback(error, new BalancesNone());
        });
    }
    public abstract getBalancesAsync(): Promise<IBalances>;

    public getTradeHistoies(callback: (error: any, result: ITradeHistories) => void): void {
        this.getTradeHistoiesAsync()
        .then((result: ITradeHistories) => {
            callback(null, result);
        })
        .catch((error: any) => {
            callback(error, new TradeHistoriesNone());
        });
    }
    public abstract getTradeHistoiesAsync(): Promise<ITradeHistories>;
}
