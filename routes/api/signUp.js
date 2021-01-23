const router = require("express").Router();
const signUpController = require("../../controllers/signUpController");
const isAuthenticated = require("../../config/isAuthenticated");

// Matches with "/api/sign-up"
router
  .route("/")
  .get(isAuthenticated, signUpController.findAll)
  .post(signUpController.create);

// Matches with "/api/sign-up/:id"
router
  .route("/:id")
  .get(isAuthenticated, signUpController.findById)
  .put(isAuthenticated, signUpController.update)
  .delete(isAuthenticated, signUpController.remove);

module.exports = router;