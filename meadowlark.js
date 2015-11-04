var express = require('express');

var app = express();

var fortune = ('./lib/fortune.js');

app.get('./about', function(get, res){
	res.render('about', {fortune: fortune.getFortune()
	});
});


app.set('port', process.env.PORT || 3000);


app.use(function(req, res){
	res.type('text/plain')
	res.status(404);
	res.send('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.send('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
