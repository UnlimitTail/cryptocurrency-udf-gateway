import {
  ChartHistoryParam,
  ExchangeCfg,
  History,
  HistoryNone,
  IChartUdfIf,
} from '../_interface';

export class Api implements IChartUdfIf {
  public config(): ExchangeCfg {
    assert(0, "it shouldn't be called");
    return new ExchangeCfg({
      desc: '',
      name: '',
      value: '',
    });
  }

  public history(
    param: ChartHistoryParam,
    callback: (error: any, result: History) => void,
  ): void {
    assert(0, "it shouldn't be called");
    callback(new Error('it called invalid exchange\'s history'), new HistoryNone());
  }
}
