const db = require("../models");

// Defining methods for the postsController
module.exports = {
     create: function (req, res) {
          db.Post.update(
               { _id: req.params.attendeeId },
               { $push: { addsAttendee: req.user._id } })
               .then(dbModel => res.json(dbModel))
               .catch(err => res.status(422).json(err));
     },
     remove: function (req, res) {
          db.Post.update(
               { _id: req.params.attendeeId },
               { $pull: { addsAttendee: req.user._id } })
               .then(dbModel => res.json(dbModel))
               .catch(err => res.status(422).json(err));
     },
};