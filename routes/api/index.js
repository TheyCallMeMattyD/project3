const router = require("express").Router();
const postRoutes = require("./posts");
const signUpRoutes = require("./signUp");
const authRoutes = require("./auth");

router.use("/auth", authRoutes)
router.use("/posts", postRoutes);
router.use("/sign-up", signUpRoutes);

module.exports = router;
