import ChartHistoryParam from './ChartHistoryParam';
import ExchangeCfg from './ExchangeCfg';
import HistoryNone from './HistoryNone';
import IChartUdf from './IChartUdf';
import IHistory from './IHistory';

export default class ChartUdfWrapper {
    constructor(private readonly mod: IChartUdf) {}

    public config(): ExchangeCfg {
        return this.mod.config();
    }

    public history(
        param: ChartHistoryParam,
        callback: (error: any, result: IHistory) => void,
      ): void {
        this.historyAsync(param)
        .then((result: IHistory) => {
            callback(null, result);
        })
        .catch((error: any) => {
            callback(error, new HistoryNone());
        });
      }

    public historyAsync(param: ChartHistoryParam): Promise<IHistory> {
        return this.mod.historyAsync(param);
    }
}
