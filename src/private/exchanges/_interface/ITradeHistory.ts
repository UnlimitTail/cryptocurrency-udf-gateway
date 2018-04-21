export interface ITradeHistory {
    base: string;
    quote: string;
    amount: number;
    timestamp: number;
}

export interface ITradeHistories {
    histories: ITradeHistory[];
}

export class TradeHistoriesNone {
    public histories: ITradeHistory[] = [];
}
