db.createCollection("students", {
  validator: {
    $jsonSchema: {
      title: "student object validation",
      required: ["name", "age", "course"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name must be string and required",
        },
        age: {
          bsonType: "int",
          minimum: 5,
          maximum: 20,
          description: "age must be required and integer",
        },
        course: {
          bsonType: "string",
          enum: ["BCA", "BTech", "BSc"],
          description:
            "couse must be one of the following values : Bca,btech,bsc",
        },
      },
    },
  },
});



db.students.insertOne({
    name : "Ram kumar",
    age : 20,
    course : "BCA",
})


db.students.insertOne({
    name :"Sarita kumari",
    age : 40,
    course : "MCA"
})

db.students.insertOne({
    name :"Sarita kumari",
    age : 20,
    course : "BSc"
})



