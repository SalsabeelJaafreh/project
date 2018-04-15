var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var movieSchema = mongoose.Schema({
 name: String,
 type: String
});

var Movie= mongoose.model('movie', movieSchema);

var selectAll = function(callback) {
  Movie.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });

};
let save = (data,callback) => {
  
 let movie= new Movie({name:data.name,type:data.type})
  movie.save()

    
}

module.exports.selectAll = selectAll;
module.exports.save = save;