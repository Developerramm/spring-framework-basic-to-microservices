db.runCommand({
    collMod:"personal",
    validator:{
        $jsonSchema:{
            required:["name","age","married","dob","weight","kids","address"],
            properties:{
                name : {
                    bsonType : "string",
                    description : "Name must be a string and is required"
                },
                age : {
                    bsonType :"int",
                    minimum : 20,
                    maximum : 35,
                    description : "age must be an integer between 20 and 35 and required"
                },
                married:{
                    bsonType : "bool",
                    description : "married must be boolean(true/false)"
                },
                dob : {
                    bsonType : "date",
                    description : "DOB must be a date"
                },
                weight : {
                    bsonType : "double",
                    description : "weight must be a double"
                },
                kids : {
                    bsonType : "int",
                    description :"kids must be an integer"
                },
                hobbies:{
                    bsonType : "array",
                    items:{
                        bsonType :"string"
                    },
                    description : "hobbies must be an array of string"
                },
                address:{
                    bsonType : "object",
                    required :["street","city","zip"],
                    properties:{
                        street :{
                            bsonType : "string",
                            description :"Street must be a string and is required"
                        },
                        city :{
                            bsonType:"string",
                            description :"city must be a string and is required"
                        },
                        zip:{
                            bsonType :"int",
                            description :"zip must be a string and is required"
                        }
                    }
                }
            }
        }
    }
})





db.personal.insertOne({
    name : "ram kumar",
    age : 22,
    married : true,
    dob : new Date(),
    weight : 33.34,
    kids : 2,
    hobbies : ["musci","coding"],
    address : {street : "noida road",city : "Delhi",zip : 100001}
})


db.personal.insertOne({
    name : "rani kumari",
    age : 24,
    married : false,
    dob : new Date(),
    weight : 45.32,
    kids : 2,
    hobbies : ["musci","coding"],
    address : {street : "noida road",city : "Delhi",zip : 100001}
})