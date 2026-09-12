let db = {};

db.createCollection("students");

db.students.insertOne({
  name: "ram kumar",
  age: 30,
  class: "BCA",
});

db.students.find();

db.students.insertMany([
  {
    name: "Priya Sharma",
    age: 21,
    class: "BCA",
  },
  {
    name: "Amit Patel",
    age: 22,
    class: "B.Tech",
  },
  {
    name: "Sneha Verma",
    age: 20,
    class: "B.Sc IT",
  },
  {
    name: "Rahul Mehta",
    age: 23,
    class: "MCA",
  },
  {
    name: "Ananya Das",
    age: 19,
    class: "BCA",
  },
]);

db.students.find({ class: "BCA" });

db.students.find({ age: { $gt: 25 } });

db.students.find({ age: { $lt: 20 } });

db.createCollection("personal");

db.personal.insertOne({
  name: "ram kumar",
  age: 23,
  married: false,
  dob: ISODate("1995-04-07T08:00:00Z"),
  weight: 45.5,
  kids: null,
  hobbies: ["music", "traveling", "fooding", "coding"],
  address: {
    street: "Riga road",
    village: "maniyari ward 06",
    pin: 843302,
  },
});

db.personal.insertOne({
  name: "priya sharma",
  age: 20,
  married: true,
  dob: ISODate("2004-04-07T08:00:00Z"),
  weight: 68.5,
  kids: 5,
  hobbies: ["music", "traveling", "fooding", "coding"],
  address: {
    street: "Riga road",
    village: "maniyari ward 06",
    pin: 843302,
  },
});

db.personal.insertOne({
  name: "Amit Kumar Verma",
  age: 27,
  married: false,
  dob: new Date(),
  weight: 72.3,
  kids: 0,
  hobbies: ["photography", "gaming", "fitness", "reading"],
  address: {
    street: "Boring Road",
    village: "Anandpuri ward 12",
    pin: 800001,
  },
});
