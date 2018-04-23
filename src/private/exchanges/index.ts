import assert from 'assert';
import * as IF from './_interface';

import * as _invalid from './_invalid';
import * as bithumb from './bithumb';

const exchanges = [
  bithumb,
];

export const Interface = IF;

export function factoryApi(exchange: string, config: IF.IPrivateApiInitParam): IF.PrivateApiWrapper {
  const mod: IF.IPrivateApi = (() => {
    switch (exchange.toUpperCase()) {
      case 'BITHUMB':
        return new bithumb.Api();
    }

    assert(0, `invalid exchange - ${exchange}`);
    return new _invalid.Api();
  })();

  return new IF.PrivateApiWrapper(mod, config);
}
