import { ChartConfig, ChartHistoryParam, IChartUdfIf } from '../_interface';

export class Api implements IChartUdfIf {
  public config(): ChartConfig {
    assert(0, "it shouldn't be called");
    return new ChartConfig();
  }

  public history(
    param: ChartHistoryParam,
    callback: (error: any, result: any) => void,
  ): void {
    assert(0, "it shouldn't be called");
  }
}
