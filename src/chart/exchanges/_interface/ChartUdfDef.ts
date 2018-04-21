import ChartHistoryParam from './ChartHistoryParam';
import ExchangeCfg from './ExchangeCfg';
import HistoryNone from './HistoryNone';
import IHistory from './IHistory';

export default abstract class ChartUdfDef {
    public abstract config(): ExchangeCfg;

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

    public abstract historyAsync(param: ChartHistoryParam): Promise<IHistory>;
}
