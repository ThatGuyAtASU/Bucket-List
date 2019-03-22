const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router
  .route("/")
  .get(itemController.findAll)
  .post(itemController.create);

router
  .route("/:id")
  .get(itemController.findById)
  .put(itemController.update)
  .delete(itemController.remove);
<<<<<<< HEAD

module.exports = router;
Collapse


=======
>>>>>>> 47d221b03cb394b293566025f278e5609646ee6e

