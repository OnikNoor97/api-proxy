const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
    res.json({ msg: "This is from the controller.js file ;) "})
});


module.exports = router;