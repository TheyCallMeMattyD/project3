const router = require("express").Router();
const signUpController = require("../../controllers/signUpController");
const isAuthenticated = require("../../config/isAuthenticated");
const registrationController = require("../../controllers/registrationController");
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


  // Favorites
  router
  .route("/registration/:attendeeId")
  // .get(isAuthenticated, postsController.findById)
  .post(isAuthenticated, registrationController.create)
  .delete(isAuthenticated, registrationController.remove);

module.exports = router;