"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../../util");
const _interface_1 = require("../_interface");
class Api extends _interface_1.ChartUdfDef {
    config() {
        return new _interface_1.ChartConfig();
    }
    history(param, callback) {
        const resolutionV = param.resolutionValue;
        const base = param.base.toUpperCase();
        const quote = param.quote.toUpperCase();
        const rnd = new Date().getTime();
        let url;
        if (param.resolution === _interface_1.ChartHistoryResolutions.Day) {
            url = `https://crix-api-endpoint.upbit.com/v1/crix/candles/days?code=CRIX.UPBIT.${quote}-${base}&count=200&ciqrandom=${rnd}`;
        }
        else if (param.resolution === _interface_1.ChartHistoryResolutions.Minute) {
            url = `https://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/${resolutionV}?code=CRIX.UPBIT.${quote}-${base}&count=200&ciqrandom=${rnd}`;
        }
        else {
            return callback(new Error('invalid resolution'), null);
        }
        util_1.get(url)
            .then((res) => res.json())
            .then((hitories) => {
            return hitories.map((h) => {
                return {
                    c: h.tradePrice,
                    h: h.highPrice,
                    l: h.lowPrice,
                    o: h.openingPrice,
                    t: h.timestamp,
                    v: h.candleAccTradeVolume,
                };
            });
        })
            .then((res) => callback(null, res))
            .catch((err) => callback(err, null));
    }
}
exports.Api = Api;
//# sourceMappingURL=index.js.map