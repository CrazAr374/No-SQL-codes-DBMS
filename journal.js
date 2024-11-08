use Abhi;
db.createCollection('Journal');

db.Journal.insert({'book_id':1,'book_name':'Javacd OOP','amt':500,'status':'Available'});
db.Journal.insert({'book_id':1,'book_name':'Java OOP','amt':400,'status':'Not Available'});
db.Journal.insert({'book_id':1,'book_name':'Java','amt':300,'status':'Not Available'});
db.Journal.insert({'book_id':2,'book_name':'Java','amt':300,'status':'Available'});
db.Journal.insert({'book_id':2,'book_name':'OPP','amt':200,'status':'Available'});
db.Journal.insert({'book_id':2,'book_name':'C++','amt':200,'status':'Available'});
db.Journal.insert({'book_id':3,'book_name':'C++','amt':150,'status':'Available'});
db.Journal.insert({'book_id':3,'book_name':'C++','amt':200,'status':'Not Available'});
db.Journal.insert({'book_id':4,'book_name':'OPP C++','amt':300,'status':'Not Available'});
db.Journal.insert({'book_id':5,'book_name':'OPP C++','amt':400,'status':'Available'});
db.Journal.insert({'book_id':5,'book_name':'C++','amt':400,'status':'Available'});
db.Journal.insert({'book_id':5,'book_name':'C++ Java','amt':400,'status':'Not Available'});

var mapfunction = function() { emit(this.book_id, this.amt); };
var reducefunction = function(key, value) { return Array.sum(value); };

db.Journal.mapReduce(mapfunction, reducefunction, { 'out': 'new' });
db.new.find().pretty();
