import ChartHistoryParam from './ChartHistoryParam';
import ExchangeCfg from './ExchangeCfg';
import IHistory from './IHistory';

export default interface IChartUdf {
    config(): ExchangeCfg;
    historyAsync(param: ChartHistoryParam): Promise<IHistory>;
}
