use comp;
db.createCollection('website');
db.website.insert({'roll':'1','name':'xyz','amount':'1000'});
db.website.insert({'roll':'2','name':'xyz','amount':'2000'});
db.website.insert({'roll':'3','name':'abc','amount':'3000'});

db.website.aggregate({$group:{_id:"$name","total":{$min:"$amount"}}});
db.website.find().forEach(function(doc) {
  db.website.updateOne(
    { _id: doc._id },
    { $set: { amount: parseInt(doc.amount) } }
  );
});

db.website.aggregate({ $group: { _id: "$name", total: { $sum: "$amount" } } });
db.website.aggregate({$group:{_id:"$name","total":{$min:"$amount"}}});
db.website.aggregate({$group:{_id:"$name","total":{$max:"$amount"}}});
db.website.aggregate({$group:{_id:"$name","total":{$first:"$amount"}}});
db.website.aggregate({$group:{_id:"$name","total":{$last:"$amount"}}});
db.website.aggregate({$group:{_id:"$name","total":{$push:"$amount"}}});
db.website.aggregate({$group:{_id:"$name","total":{$sum:1}}});
db.website.aggregate({$group:{_id:"$name","total":{$addToSet:"$amount"}}});

db.createCollection('website1');
db.website1.insert({'r':1,'name':'harsh'});
db.website1.find().pretty();
db.website1.createIndex({'name':1});
db.website1.createIndex({'name':-1});
db.website1.getIndexes();
db.website1.createIndex({'name':-1});
db.website1.dropIndex({'name':1});
db.website1.getIndexes();
