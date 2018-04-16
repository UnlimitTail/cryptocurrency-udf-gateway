"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const IF = __importStar(require("./_interface"));
const _invalid = __importStar(require("./_invalid"));
const upbit = __importStar(require("./upbit"));
exports.Interface = IF;
function factoryApi(exchange) {
    switch (exchange.toUpperCase()) {
        case 'UPBIT':
            return new upbit.Api();
    }
    assert_1.default(0, `invalid exchange - ${exchange}`);
    return new _invalid.Api();
}
exports.factoryApi = factoryApi;
//# sourceMappingURL=index.js.map