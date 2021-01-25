const router = require("express").Router();
const postsController = require("../../controllers/postsController");
const isAuthenticated = require("../../config/isAuthenticated");
const favoritesController = require("../../controllers/favoritesController");

// Matches with "/api/posts"
router
  .route("/")
  .get(isAuthenticated, postsController.findAll)
  .post(isAuthenticated, postsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(isAuthenticated, postsController.findById)
  .put(isAuthenticated, postsController.update)
  .delete(isAuthenticated, postsController.remove);
  // Matches with "/api/sign-up"


  // Favorites
  router
  .route("/favorites/:eventId")
  // .get(isAuthenticated, postsController.findById)
  .post(isAuthenticated, favoritesController.create)
  .delete(isAuthenticated, favoritesController.remove);

module.exports = router;
