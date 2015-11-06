var express = require ('express');
var app = express();

//set up handlebars view engine
var handlebars  = require ('express-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//end set up

//add static middleware
app.use(express.static(__dirname + '/public'));

//to test dynamic content
var fortunes = [
  "blaBla",
  "fdfsfsdfs",
  "sdsdsdsdsds"
]

app.set('port', process.env.port || 8080);
console.log('port 8888 set to app');

app.get('/', function(req, res){
  res.render('home');

} );
console.log('1');

app.get('/about', function(req, res){
  var fortuneRandom = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { fortune: fortuneRandom});
});
console.log('2');

//custom 404 page
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});
console.log('3');
//app.use = using middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);

  res.status(500);
  res.render('500');
});

console.log('4');

app.listen(app.get('port'), function(){
  console.log('5');
  console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});
