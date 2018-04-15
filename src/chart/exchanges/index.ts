import assert from 'assert';
import * as IF from './_interface';

import * as _invalid from './_invalid';
import * as upbit from './upbit';

export const Interface = IF;

export function factoryApi(exchange: string): IF.IChartUdfIf {
  switch (exchange.toUpperCase()) {
    case 'UPBIT':
      return new upbit.Api();
  }

  assert(0, `invalid exchange - ${exchange}`);
  return new _invalid.Api();
}
