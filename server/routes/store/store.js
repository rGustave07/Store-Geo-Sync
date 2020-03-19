const express = require("express");
const router = express.Router();
const storeController = require("../../controllers/StoreController");

router.post("/addStore", storeController.addStore);

module.exports = router;
