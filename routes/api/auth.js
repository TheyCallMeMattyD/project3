const router = require("express").Router();
const passport = require("passport");

router.post("/login", passport.authenticate("local"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
        email: req.user.email,
        id: req.user.id
    });
});

module.exports = router;
