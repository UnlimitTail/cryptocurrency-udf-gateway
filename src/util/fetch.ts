import 'isomorphic-fetch';

export function get(url: string): Promise<any> {
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

export function post(url: string, param: any): Promise<any> {
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
