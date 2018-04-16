"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
function get(url) {
    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
            'user-agent': 'Mozilla/4.0 MDN Example',
        },
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    });
}
exports.get = get;
function post(url, param) {
    return fetch(url, {
        body: JSON.stringify(param),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
            'user-agent': 'Mozilla/4.0 MDN Example',
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    });
}
exports.post = post;
//# sourceMappingURL=fetch.js.map