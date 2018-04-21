import { ErrorPromise } from '../../../util';
import {
  ChartHistoryParam,
  ChartUdfDef,
  ExchangeCfg,
  IHistory,
} from '../_interface';

export class Api extends ChartUdfDef {
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
