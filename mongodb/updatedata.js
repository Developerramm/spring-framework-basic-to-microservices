db.students.insertMany([
    {name:"ram kumar",age:20,class :"BCA",skills:["C++","java"]},
    {name :"mohit kumar",age :30,class:"Btech",skills:["python","DJango"]},
    {name :"sarita kumari",age :23,class :"BSc",skills:["HTML","CSS","ReactJs"]},
    {name :"Babli",age : 33,class :"Bcom",skills:['accounting',"auditing"]},
    {name :"Rahan",age : 45,class :"MCA",skills : ["Javascript","angular"]}
])



db.students.updateOne(
    {name : "Rahan"},
    {$set : {name : "Rohan kumar",age : 26, skills : ["PHP","MySQL","Wordress"]}}
)


db.students.updateOne(
    {_id: ObjectId('6a9c505532680a3df31e8d01')},
    {$set : {age : 20,class : "BBA"}}
)



db.students.insertOne({
    name : "ram kumar", age : 25, class : "BCA", skills : ["Mongodb", "Node","Express"]
})



db.students.updateMany(
    {class : "BCA"},
    {$set : {class : "BIT"}}
)