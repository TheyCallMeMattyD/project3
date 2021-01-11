const router = require("express").Router();
const postRoutes = require("./posts");
const signUpRoutes = require("./signUp")
// Post routes
router.use("/posts", postRoutes);
router.use("/sign-up", signUpRoutes);

module.exports = router;
