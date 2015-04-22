var express = require('express'),
	superAgent = require('superagent'),
	cheerio = require('cheerio'),

	app = express();

app.get('/index.html', function (rq, rs, next) {
	
	superAgent.get('https://cnodejs.org/')
				.end(function(err, srs){
					if (err) {
						return next(err);
					}

					var $ = cheerio.load(srs.text),
						result = [];

					$('#topic_list .topic_title').each(function(index, element){
						var $element = $(element);

						result.push({
							title: $element.attr('title'),
							href: $element.attr('href')
						});
					});

					rs.send(result);
				});

});


app.listen(3000, function(){
	console.log('3000');
});