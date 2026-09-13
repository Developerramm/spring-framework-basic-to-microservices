let db = {};

db.students.insertOne({
  name: "ram kumar",
  age: 20,
  class: "BCA",
  skills: ["HTML", "CSS", "Springboot"],
});

db.students.insertMany([
  {
    name: "Priya Sharma",
    age: 21,
    class: "MCA",
    skills: ["Java", "Spring Boot", "MySQL"],
  },
  {
    name: "Amit Verma",
    age: 19,
    class: "BCA",
    skills: ["Python", "Django", "PostgreSQL"],
  },
  {
    name: "Sneha Patel",
    age: 22,
    class: "B.Tech",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    name: "Rohit Singh",
    age: 20,
    class: "B.Sc CS",
    skills: ["C++", "Data Structures", "Algorithms"],
  },
  {
    name: "Ananya Iyer",
    age: 23,
    class: "M.Tech",
    skills: ["Python", "TensorFlow", "Machine Learning"],
  },
  {
    name: "Vikram Malhotra",
    age: 20,
    class: "BCA",
    skills: ["HTML", "CSS", "Tailwind", "JavaScript"],
  },
  {
    name: "Kavita Rao",
    age: 21,
    class: "B.Tech",
    skills: ["AWS", "Docker", "Kubernetes", "Linux"],
  },
  {
    name: "Deepak Choudhary",
    age: 22,
    class: "MCA",
    skills: ["PHP", "Laravel", "MongoDB"],
  },
]);

db.students.updateOne(
  { name: "Sneha Patel" },
  { $set: { age: 25, name: "Sneha Singh " } },
);

db.students.updateOne(
  { _id: ObjectId("6aa5127f8bc8b85514f2406a") },
  { $set: { class: "BBA" } },
);

db.students.updateMany({ class: "BCA" }, { $set: { class: "BIT" } });

db.students.updateMany({}, { $rename: { skills: "coding_skills" } });

db.students.updateMany({}, { $rename: { coding_skills: "skills" } });

db.students.updateOne({ name: "Deepak Choudhary" }, {$inc : {age : 30}});


db.students.updateOne({ name: "Deepak Choudhary" }, {$mul : {age : 2}});


db.students.updateOne({ name: "Deepak Choudhary" }, {$unset : {age : ""}});


db.students.updateMany({}, {$currentDate : {lastModified : true}});



