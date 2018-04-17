# cryptocurrency-udf-gateway

## What is UDF ?

> It's an HTTP-based protocol that is designed to deliver data to the Charting Library in a simple and efficient way.

## What this module do ?

> It's developed for long polling. It supports to do crawl or call from cryptocurrency exchanges, then it returns results with UDF format.

## What you should do

> Developing Restful API server for UDF and send the result what tradingview charting_library wants.

## Installation

> npm i -S cryptocurrency-udf-gateway

## Usage for express

```javascript
const CUG = require('cryptocurrency-udf-gateway');
const EMPTY_HISTORY = {t: [], o: [], h: [], l: [], c: [], v: [], s: 'ok'};

// [Sample]
// symbol : UPBIT:BTC-KRW
// resolution : D
router.get('/', function(req, res, next) {
  const {
    symbol,
    resolution
  } = req.query;

  const param = new CUG.Chart.Helpers.HistoryParam({
    symbol,
    resolution
  });

  CUG.Chart.Helpers.history(param, function(err, result){
    if (err){
      res.json(EMPTY_HISTORY);
    } else {
      res.json(result);
    }
  })
});

```
