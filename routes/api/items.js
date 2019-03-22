const router = require("express").Router();
const booksController = require("../../controllers/itemController");

//Matches with "/api/items"
router.route("/")
    .get(itemControlller.findAll)
    .post(itemController.create);

// Matches with /api/items/:id
router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.updata)
    .delete(booksController.remove);

module.exports = router;