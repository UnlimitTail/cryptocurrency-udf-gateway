import { BalancesNone, IBalances } from './IBalance';
import IPrivateApi from './IPrivateApi';
import IPrivateApiInitParam from './IPrivateApiInitParam';
import { ITradeHistories, TradeHistoriesNone } from './ITradeHistory';

export default abstract class PrivateApiWrapper {
    constructor(private readonly mod: IPrivateApi) {}

    public initialize(param: IPrivateApiInitParam, callback: (error: any) => void): void {
        this.initializeAsync(param)
        .then((result: History) => {
            callback(null);
        })
        .catch((error: any) => {
            callback(error);
        });
    }
    public initializeAsync(param: IPrivateApiInitParam): Promise<any> {
        return this.mod.initializeAsync(param);
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

    public getTradeHistoies(callback: (error: any, result: ITradeHistories) => void): void {
        this.getTradeHistoiesAsync()
        .then((result: ITradeHistories) => {
            callback(null, result);
        })
        .catch((error: any) => {
            callback(error, new TradeHistoriesNone());
        });
    }
    public getTradeHistoiesAsync(): Promise<ITradeHistories> {
        return this.mod.getTradeHistoiesAsync();
    }
}
