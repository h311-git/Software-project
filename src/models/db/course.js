db.createCollection("course", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "department", "credits"],
      properties: {
        name: {
          bsonType: "string",
        },
        department: {
          bsonType: "string",
        },
        credits: {
          bsonType: "int",
        },
      },
    },
  },
});
