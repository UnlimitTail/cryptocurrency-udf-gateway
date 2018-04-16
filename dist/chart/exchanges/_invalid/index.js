"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _interface_1 = require("../_interface");
class Api {
    config() {
        assert(0, "it shouldn't be called");
        const cfg = new _interface_1.ChartConfig();
        cfg.supports_search = false;
        cfg.supports_group_request = false;
        cfg.supported_resolutions = [];
        cfg.supports_marks = false;
        cfg.supports_time = false;
        return cfg;
    }
    history(param, callback) {
        assert(0, "it shouldn't be called");
        callback(new Error('it called invalid exchange\'s history'), null);
    }
}
exports.Api = Api;
//# sourceMappingURL=index.js.map