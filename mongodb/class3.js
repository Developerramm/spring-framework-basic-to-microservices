db.createCollection("student1", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "course", "address"],
      title: "student object validation",
      properties: {
        name: {
          bsonType: "string",
          description: "name must be string and is required",
        },
        age: {
          bsonType: "int",
          minimum: 5,
          maximum: 20,
          description: "Age must be integer and between 5 to 20",
        },
        course: {
          bsonType: "string",
          enum: ["BCA", "Btech", "Bsc"],
          description: "Course must be one of: BCA, Btech, Bsc",
        },
        address: {
          bsonType: "object",
          required: ["street", "city", "zipcode"],
          properties: {
            street: {
              bsonType: "string",
              description: "street must be string and is required",
            },
            city: {
              bsonType: "string",
              description: "city must be string and is required",
            },
            zipcode: {
              bsonType: "int",
              minimum: 100000,
              maximum: 999999,
              description: "zip code must be a 6-digit integer and is required",
            },
          },
        },
      },
    },
  },
});

db.student1.insertOne({
  name: "Rohan Kumar",
  age: NumberInt(19),
  course: "BCA",
  address: {
    street: "Station Road",
    city: "Patna",
    zipcode: NumberInt(800001),
  },
});

db.student1.insertOne({
  name: "Karan Singh",
  age: NumberInt(25),
  course: "MBA",
  address: {
    street: "Park Street",
    zipcode: NumberInt(8001),
  },
});
