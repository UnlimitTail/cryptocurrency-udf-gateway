import * as Exchanges from '../exchanges';

export default function(callback: (error: any, result: any) => void): any {
    const result = {
        exchanges: Exchanges.getExchangeConfigs(),
        supported_resolutions: ['1M', '5M', '15M', '30M', '60M', 'D', '1W'],
        supports_group_request: false,
        supports_marks: false,
        supports_search: true,
        supports_time: true,
        supports_timescale_marks: false,
    };

    callback(null, result);
}
