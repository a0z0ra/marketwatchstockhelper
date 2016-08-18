//https://github.com/ruipgil/scraperjs
var scraperjs = require('scraperjs');
var stock  = process.argv[2] == null ? "BREW" : process.argv[2];
scraperjs.StaticScraper.create('http://www.marketwatch.com/investing/stock/'+stock+'/analystestimates')
.scrape(function($) {
	var curPrice = Number( $("p.data.bgLast").first().text() );
	var avgEstimate = Number( $(".snapshot td.column2").first().next().text() );
	var estPercentageGain = Math.round( ((avgEstimate - curPrice)*100)/curPrice *100)/100;

	return { "tickerSym" : stock,
			"curPrice" : curPrice,
			"avgEstimate": avgEstimate,
			"estPercentageGain": estPercentageGain};
})
.then(function(news) {
	console.log(news);
})
