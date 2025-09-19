// 1 Create Database
use("windBreaker");

// 2 Create Collection
// db.createCollection("posts");

// 3 Insert One
// db.getCollection("posts").insertOne({
//   title: "Post Title 1",
//   body: " Body of Post 1",
//   category: " Event",
//   likes: 2,
//   tags: ["news", "events"],
//   date: Date(),
// });

// Insert Many
// db.posts.insertMany([
//   {
//     title: "Community Cleanup Drive",
//     body: "Join us this weekend for a community cleanup drive at the central park.",
//     category: "Event",
//     likes: 5,
//     tags: ["community", "cleanup", "volunteering"],
//     date: "2025-09-21T09:00:00Z",
//   },
//   {
//     title: "Tech Workshop: Intro to IoT",
//     body: "A beginner-friendly workshop covering basics of IoT technologies and practical demos.",
//     category: "Workshop",
//     likes: 10,
//     tags: ["technology", "IoT", "learning"],
//     date: "2025-09-25T14:30:00Z",
//   },
//   {
//     title: "Local Farmers Market Open",
//     body: "Support local farmers by visiting the monthly market this Sunday.",
//     category: "Market",
//     likes: 8,
//     tags: ["local", "farmers", "market"],
//     date: "2025-09-22T07:00:00Z",
//   },
// ]);

// READ ALL DOCUMENTS
// db.posts.find();

// READ ONE DOCUMENT
// db.posts.findOne({
//   likes: 1,
// });

// READ MANY DOCUMENTS THAT HAS SSIMILARITY
// db.posts.find({
//     likes : 1
// })
// db.posts.find({ title: "Post Title 2" });

// UPDATE AND FIND
// db.posts.updateOne(
//   {
//     title: "Post Title 2",
//   },
//   {
//     $set: { likes: 2 },
//   }
// );

// db.posts.insertOne({
//   title: "Post Title 5",
//   body: "body of post 5",
//   category: " News",
//   likes: 2,
//   tags: ["news", "events"],
// });

db.posts.find({});
// db.posts.updateOne(
//   {
//     title: "Post Title 5",
//   },
//   {
//     $set: {
//       title: "Post Title 10",
//       body: "Body of post.",
//       category: "Event",
//       likes: 100,
//       tags: ["news", "events"],
//       date: Date(),
//     },
//   }
// );
