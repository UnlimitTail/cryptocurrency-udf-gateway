export default class ChartConfig {
    public supports_search: boolean = false;
    public supports_group_request: boolean = false;
    public supported_resolutions: Array<string> = ['1', '5', '15', '30', '60', '1D', '1W', '1M'];
    public supports_marks: boolean = false;
    public supports_time: boolean = true;
}
