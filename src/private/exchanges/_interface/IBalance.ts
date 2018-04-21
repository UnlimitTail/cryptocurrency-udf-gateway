export interface IBalance {
    symbol: string;
    amount: number;
}

export interface IBalances {
    balances: IBalance[];
}

export class BalancesNone implements IBalances {
    public balances: IBalance[] = [];
}
