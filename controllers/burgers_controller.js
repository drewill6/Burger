var express = require("express");
var router = express.Router();

// Burger.js import
var burger = require("../models/burger.js");

// All routes and their logic
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    //OR function () res.redirect("/");
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows === 0) {
        // Id must not exist because none of the rows were changed, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});
//OR 

//burger.update ({
    //devoured: req.body.devoured
    //}, condition, function(){res.redirect("/");
//});

//router.delete("/:id", function(req, res){

//var condition = "id = " + req.params.id;
//burger.delete(condition, function() {
    //res.redirect("/");
//});
//});

// Export routes for server.js to use.
module.exports = router;