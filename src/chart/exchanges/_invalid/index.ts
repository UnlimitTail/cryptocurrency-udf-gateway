import { ErrorPromise } from '../../../util';
import {
  ChartHistoryParam,
  ExchangeCfg,
  IChartUdf,
  IHistory,
} from '../_interface';

export class Api implements IChartUdf {
  public config(): ExchangeCfg {
    assert(0, "it shouldn't be called");
    return new ExchangeCfg({
      desc: '',
      name: '',
      value: '',
    });
  }

  public historyAsync(param: ChartHistoryParam): Promise<IHistory> {
    assert(0, "it shouldn't be called");
    return new ErrorPromise<IHistory>('it called invalid exchange\'s history');
  }
}
