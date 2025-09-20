db.createCollection("school");

// Use
use("school");

// insert a single value
// db.school.insertOne({
//   name: "SpongeBob",
//   age: 16,
//   gpa: 1.5,
//   student_year: "first_year",
// });

// insert many values
// db.school.insertMany([
//   {
//     name: "Patrick",
//     age: 20,
//     gpa: 2.4,
//     student_year: "second_year",
//   },
//   {
//     name: "Ruby-chan",
//     age: 21,
//     gpa: 4,
//     student_year: "second_year",
//   },
//   {
//     name: "Jan",
//     age: 20,
//     gpa: 3.6,
//     student_year: "fourth_year",
//   },
// ]);

// find function
// renders only 1 value
// db.school.findOne({});

// render all value
// db.school.find({});

// Updating values

// db.school.updateOne(
//   {
//     name: "Patrick",
//   },
//   {
//     $set: {
//       name: "Patrick v2",
//       age: 24,
//     },
//   }
// );

// Delete function

// db.school.deleteOne({
//   age: 24
// });

// db.school.deleteOne({ age: 24 });
// Sorting here 1 for default and -1 for reverse
// db.school.find().sort({ gpa: -1 });

// db.school.find().sort({ gpa: 1 }).limit(2);
// db.school.find({}, { _id: false, name: true, gpa: true });
// db.school.find({ gpa: { $eq: 1.5 } });

// db.school.updateOne(
//   {
//     name: "SpongeBob",
//   },
//   {
//     $set: {
//       name: "hello world",
//     },
//   }
// );

// db.school.find({ name: { $ne: "hello world" } });

// logical operator

db.school.find({
  $and: [
    {
      age: { $lte: 20 },
    },
  ],
});
