import { expect } from 'chai';
import 'mocha';
import * as Lib from '../../src';

describe('chart', () => {

  describe('config', () => {

    it('helper', () => {
      Lib.Chart.Helpers.config((err: any, result: any): void => {
        // console.log('result', err, result);
        expect(err).to.equal(null);
        expect(result.exchanges.length).greaterThan(0);
      });

    });

  });

});
