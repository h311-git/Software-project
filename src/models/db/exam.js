db.createCollection("exam", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "time", "instructor", "course"],
      properties: {
        title: {
          bsonType: "string",
        },
        time: {
          bsonType: "date",
        },
        instructor: {
          bsonType: "string",
        },
        grade: {
          bsonType: "double",
        },
        course: {
          bsonType: "objectId",
        },
      },
    },
  },
});
