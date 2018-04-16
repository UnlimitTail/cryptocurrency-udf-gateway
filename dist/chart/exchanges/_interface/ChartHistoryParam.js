"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChartHistoryResolutions;
(function (ChartHistoryResolutions) {
    ChartHistoryResolutions["None"] = "_";
    ChartHistoryResolutions["Day"] = "D";
    ChartHistoryResolutions["Minute"] = "M";
})(ChartHistoryResolutions = exports.ChartHistoryResolutions || (exports.ChartHistoryResolutions = {}));
class ChartHistoryParam {
    constructor(param) {
        this.base = '';
        this.quote = '';
        this.resolution = ChartHistoryResolutions.None;
        this.resolutionValue = 0;
        this.base = param.base;
        this.quote = param.quote;
        this.resolution = param.resolution;
        this.resolutionValue = param.resolutionValue;
    }
}
exports.default = ChartHistoryParam;
//# sourceMappingURL=ChartHistoryParam.js.map