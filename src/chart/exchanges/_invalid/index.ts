import { ChartConfig, ChartHistoryParam, IChartUdfIf } from '../_interface';

export class Api implements IChartUdfIf {
  public config(): ChartConfig {
    assert(0, "it shouldn't be called");
    const cfg = new ChartConfig();
    cfg.supports_search = false;
    cfg.supports_group_request = false;
    cfg.supported_resolutions = [];
    cfg.supports_marks = false;
    cfg.supports_time = false;
    return cfg;
  }

  public history(
    param: ChartHistoryParam,
    callback: (error: any, result: any) => void,
  ): void {
    assert(0, "it shouldn't be called");
    callback(new Error('it called invalid exchange\'s history'), null);
  }
}
