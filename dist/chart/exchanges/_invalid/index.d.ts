import { ChartConfig, ChartHistoryParam, IChartUdfIf } from '../_interface';
export declare class Api implements IChartUdfIf {
    config(): ChartConfig;
    history(param: ChartHistoryParam, callback: (error: any, result: any) => void): void;
}
