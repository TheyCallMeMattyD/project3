const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const passport = require("./routes/setup");  // THIS MAY BE WRONG
const auth = require("./routes/auth");

const app = express();
const PORT = 5000;  // THIS PORT MAY NEED TO GO BACK TO 3001
const MONGO_URI = "mongodb: //127.0.0.1:27017//tutorial_social_login";

// ----------------------------- INSERTED FROM GIST -----------------------
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err));

// Bodyparser middleware, extended false does not allow nested payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
    session({
        secret: "very secret this is",
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", auth);
app.get("/", (req, res) => res.send("Good morning sunshine!"));

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
// -------------------------- END OF INSERTED FROM GIST ---------------------

const routes = require("./routes"); // THIS MAY NO LONGER BE NECESSARY


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});