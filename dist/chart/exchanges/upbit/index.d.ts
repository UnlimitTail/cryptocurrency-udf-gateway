import { ChartConfig, ChartHistoryParam, ChartUdfDef } from '../_interface';
export declare class Api extends ChartUdfDef {
    config(): ChartConfig;
    history(param: ChartHistoryParam, callback: (error: any, result: any) => void): void;
}
