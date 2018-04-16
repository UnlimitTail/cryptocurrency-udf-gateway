"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exchanges = __importStar(require("../exchanges"));
function default_1(param, callback) {
    // ex. BITFINEX:BTC-USD
    const [exchange, pair] = param.symbol.split(':'); // BITFINEX
    const [base, quote] = pair.split('-'); // BTC-USD
    // ex. 30M
    const rsValue = String(param.resolution.match(/\d+/g)); // 30
    const rs = String(param.resolution.match(/[a-zA-Z]+/g)); // M
    const historyParam = new Exchanges.Interface.ChartHistoryParam({
        base,
        quote,
        resolution: rs,
        resolutionValue: parseInt(rsValue, 10),
    });
    const api = Exchanges.factoryApi(exchange);
    api.history(historyParam, callback);
}
exports.default = default_1;
//# sourceMappingURL=history.js.map