var express = require('express');

var app = express();

app.get('/', function (rq, rs) {
	rs.send("First Lesson");
});

app.listen(3000, function(){
	console.log('app is listening at port 3000');
});