const router = require("express").Router();
const signUpController = require("../../controllers/signUpController");

// Matches with "/api/sign-up"
router
  .route("/")
  .get(signUpController.findAll)
  .post(signUpController.create);

// Matches with "/api/sign-up/:id"
router
  .route("/:id")
  .get(signUpController.findById)
  .put(signUpController.update)
  .delete(signUpController.remove);

module.exports = router;