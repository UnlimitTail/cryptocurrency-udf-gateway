import ChartConfig from './ChartConfig';
import ChartHistoryParam from './ChartHistoryParam';
export default interface IChartUdfIf {
    config(): ChartConfig;
    history(param: ChartHistoryParam, callback: (error: any, result: any) => void): void;
}
