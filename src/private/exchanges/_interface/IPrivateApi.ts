import { BalancesNone, IBalances } from './IBalance';
import IPrivateApiInitParam from './IPrivateApiInitParam';
import { ITradeHistories, TradeHistoriesNone } from './ITradeHistory';

export default interface IPrivateApi {
    initializeAsync(param: IPrivateApiInitParam): Promise<boolean>;
    getBalancesAsync(): Promise<IBalances>;
    getTradeHistoiesAsync(): Promise<ITradeHistories>;
}
