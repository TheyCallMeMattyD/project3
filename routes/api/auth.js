const router = require("express").Router();
const passport = require("passport");

router.post("/login", passport.authenticate("local"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(req.user)
    res.json({
        email: req.user.email,
        _id: req.user.id,
        favoritesEvents: req.user.favoritesEvents,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        fullName: `${req.user.firstName} ${req.user.lastName}`
    });
});

 // Route for logging user out
 router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

module.exports = router;
