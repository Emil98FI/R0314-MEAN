var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.locals.pretty = true;

app.get('/', function(req, res) {
	res.render('pages/index', {
		new_heading: 'This was passed from the JS file',
		new_paragraph: 'LALALALALALAAL',
		new_footer: 'Here is the new footer'
	});
});

var data = {
	users: [ { name: 'John', Age: 52 }, { name: 'Mike', Age: 42 }, { name: 'Smantha' } ]
};

app.get('/users', function(req, res) {
	res.render('pages/users', data);
});
app.listen(8081);

console.log('8081 is the magic port');
