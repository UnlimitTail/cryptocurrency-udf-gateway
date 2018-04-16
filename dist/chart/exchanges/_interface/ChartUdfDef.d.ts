import ChartConfig from './ChartConfig';
import ChartHistoryParam from './ChartHistoryParam';
import IChartUdfIf from './IChartUdfIf';
export default abstract class ChartUdfDef implements IChartUdfIf {
    config(): ChartConfig;
    abstract history(param: ChartHistoryParam, callback: (error: any, result: any) => void): void;
}
