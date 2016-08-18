# marketwatchstockhelper
NodeJS/PhantomJS MarketWatch Stock Helper, given a stock symbol will return current Price, average estimate and calculated estimate of gain/loss in percent.  Thanks https://github.com/ruipgil/scraperjs for great tool.

Usage from command line:
node scraper.js BREW

{ tickerSym: 'BREW',
  curPrice: 14,
  avgEstimate: 17,
  estPercentageGain: 21.43 }
