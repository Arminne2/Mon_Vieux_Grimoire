const express = require("express");
const router = express.Router();
const bookCtrl = require("../controllers/book");
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');

router.post("/",auth, multer, bookCtrl.createBook);
router.get("/", bookCtrl.getBook);
router.get("/bestrating", bookCtrl.getArrayBook);
router.get("/:id", bookCtrl.getOneBook);
router.put("/:id", auth, multer, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
router.post("/:id/rating", auth, bookCtrl.ratingBook);
module.exports = router;
