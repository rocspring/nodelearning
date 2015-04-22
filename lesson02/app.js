var express = require('express'),
	utility = require('utility');

var app = express();

app.get('/', function (rq, rs) {

	var q = rq.query.q,
		md5Value = utility.md5(q);

	rs.send(md5Value);
});

app.listen(3000, function(rq, rs){

});
