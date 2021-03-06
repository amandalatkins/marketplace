const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router
  .route("/")
  .get(productsController.findAll)
  .post(productsController.create);

router
.route("/cart")
.get(productsController.fetch);

// Matches with "/api/products/:id"
router
  .route("/id/:id")
  .get(productsController.findById)
  .put(productsController.update)
  .delete(productsController.remove);

// Matches with "/api/products/category"
router
  .route("/category/:id")
  .get(productsController.findByClass)

module.exports = router;
