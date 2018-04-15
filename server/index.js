var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var movies = require('../database-mongo');

var app = express();

//UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/movies', function (req, res) {
  movies.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/movie',function(req,res){
 //  console.log(req.body)
	 movies.save(req.body)
	res.send(req.body)



});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

