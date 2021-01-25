const db = require("../models");

// Defining methods for the postsController
module.exports = {
     create: function (req, res) {
          db.User.update(
               { _id: req.user._id },
               { $push: { favoritesEvents: req.params.eventId } })
               .then(dbModel => res.json(dbModel))
               .catch(err => res.status(422).json(err));
     },
     remove: function (req, res) {
          db.User.update(
               { _id: req.user._id },
               { $pull: { favoritesEvents: req.params.eventId } })
               .then(dbModel => res.json(dbModel))
               .catch(err => res.status(422).json(err));
     },
};
