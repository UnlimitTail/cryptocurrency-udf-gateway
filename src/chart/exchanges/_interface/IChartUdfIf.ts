import ChartHistoryParam from './ChartHistoryParam';
import ExchangeCfg from './ExchangeCfg';
import History from './History';

export default interface IChartUdfIf {
  config(): ExchangeCfg;

  history(
    param: ChartHistoryParam,
    callback: (error: any, result: History) => void,
  ): void;
}
