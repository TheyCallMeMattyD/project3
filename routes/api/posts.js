const router = require("express").Router();
const postsController = require("../../controllers/postsController");
const isAuthenticated = require("../../config/isAuthenticated");

// Matches with "/api/posts"
router
  .route("/")
  .get(postsController.findAll)
  .post(isAuthenticated, postsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);
  // Matches with "/api/sign-up"

module.exports = router;
