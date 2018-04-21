import assert from 'assert';
import * as IF from './_interface';

import * as _invalid from './_invalid';
import * as upbit from './upbit';

const exchanges = [
  upbit,
];

const exchangeConfig: IF.ExchangeCfg[] = [];
exchanges.map((type: typeof _invalid) => {
  const temp = new type.Api();
  exchangeConfig.push(temp.config());
});
export function getExchangeConfigs(): IF.ExchangeCfg[] {
  return exchangeConfig;
}

export const Interface = IF;

export function factoryApi(exchange: string): IF.ChartUdfDef {
  switch (exchange.toUpperCase()) {
    case 'UPBIT':
      return new upbit.Api();
  }

  assert(0, `invalid exchange - ${exchange}`);
  return new _invalid.Api();
}
