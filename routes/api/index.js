const router = require("express").Router();
const postRoutes = require("./posts");
const signUpRoutes = require("./Users")
// Post routes
router.use("/posts", postRoutes);
router.use("/sign-up", signUpRoutes);

module.exports = router;
