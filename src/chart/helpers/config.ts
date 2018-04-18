import * as Exchanges from '../exchanges';

export default function(callback: (error: any, result: any) => void): any {
    const result = {
        exchanges: Exchanges.getExchangeConfigs(),
        supported_resolutions: [ '1', '5', '10', '30', '60', '240', '360', 'D', 'W', 'M' ],
        supports_group_request: false,
        supports_marks: false,
        supports_search: true,
        supports_time: true,
        supports_timescale_marks: false,
    };

    callback(null, result);
}
