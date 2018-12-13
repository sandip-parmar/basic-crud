var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Sandip" });
});

router.get("/:id", function(req, res, next) {
	if (req.params.id <= 6) {
		res.send(true);
	} else {
		res.send(false);
	}
});
module.exports = router;
