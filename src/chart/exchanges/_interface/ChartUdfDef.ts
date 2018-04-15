import ChartConfig from './ChartConfig';
import ChartHistoryParam from './ChartHistoryParam';
import IChartUdfIf from './IChartUdfIf';

export default abstract class ChartUdfDef implements IChartUdfIf {
  public config(): ChartConfig {
    return new ChartConfig();
  }

  public abstract history(
    param: ChartHistoryParam,
    callback: (error: any, result: any) => void,
  ): void;
}
