const mongoose = require("mongoose");
const db = require("../models");

// Clear the database and insert the new Events

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const bookSeed = [
  {
    event: "Fun Run in the Sun",
    date: new Date(Date.now()),
    organizer: "RunningMan",
    description: "We gonna run all around town, starting at the McDonalds on Main St.",
    location: "123 Main Street",
    destination: "7204 Tanager Street Springfield VA",
    startTime: "8 am",
    endTime: "12 pm"
  },
  {
    event: "Bar Blast!",
    date: new Date(Date.now()),
    organizer: "Downtown Beer Hound",
    description: "See how many stops you can make it through... starting at Murphy's Pub",
    location: "555 Irishtown Lane",
    destination: "123 Easy Street",
    startTime: "6 pm",
    endTime: "9 pm"
  },
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
